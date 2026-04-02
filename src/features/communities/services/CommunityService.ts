import { User } from "better-auth";

import { membershipService } from "./MembershipService";
import { checkPassword } from "@/src/shared/utils/auth";
import { CommunityInput } from "../schemas/communitySchema";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import { deleteFileFromUploadThing } from "@/src/shared/utils/uploadthing-utils";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";
import { IMembershipRepository, membershipRepository } from './MembershipRepository';
import { IProfileRepository, profileRepository } from '../../profile/services/ProfileRepository';
import { connectRepository, IConnectRepository } from '../../connects/services/ConnectRepository';

class CommunityService {
    constructor(
        private communityRepository: ICommunityRepository,
        private membershipRepository: IMembershipRepository,
        private connectRepository: IConnectRepository,
        private profileRepository: IProfileRepository
    ){}

    async createCoreCommunity(data: CommunityInput, userId: string) {
        await this.communityRepository.create({
            ...data,
            createdBy: userId,
        });
    }

    async getCommunitiesForAPI(userId: string) {
        const communities = await this.communityRepository.findByUser(userId)
        return communities.map(comm => ({
            id: comm.id,
            name: comm.name
        }))
    }

    async getUserCommunities(user: User) {
        const communities = await this.communityRepository.findByUser(user.id);
        const enriched = await Promise.all(
            communities.map(async (community) => {
                const isMember = true
                const isAdmin = CommunityPolicy.isAdmin(user, community)
                const membersCount = await this.membershipRepository.getMembersCount(community.id)

                return {
                    data: community,
                    membersCount,
                    context: {
                        isMember,
                        isAdmin,
                    },
                    permissions: {
                        canEdit: CommunityPolicy.canEdit(user, community),
                        canDelete: CommunityPolicy.canDelete(user, community),
                        canViewMembers: CommunityPolicy.canViewMembers(user, community),
                        canJoin: MembershipPolicy.canJoin(user, community, isMember),
                        canLeave: MembershipPolicy.canLeave(user, community, isMember),
                    },
                };
            }),
        );

        return enriched;
    }

    async getCoreCommunity(communityId: string) {
        const community = await this.communityRepository.findById(communityId);
        return community;
    }

    async getCoreCommunityDetails(communityId: string, user?: User) {

        const community = await this.communityRepository.findByIdWithAdmin(communityId)
        if ( !community ) {
            return null
        }

        const membersCount = await this.membershipRepository.getMembersCount(community.id)
        const admin = await this.profileRepository.findById(community.createdBy)

        if ( !user ) {
            return {
                data: {
                    ...community,
                    admin
                },
                membersCount,
                context: null,
                permissions: null
            }
        }

        const isMember = await membershipService.isMember(communityId, user.id)
        const isAdmin = CommunityPolicy.isAdmin(user, community)

        return {
            data: {
                ...community,
                admin
            },
            membersCount,
            context: {
                isMember,
                isAdmin,
            },
            permissions: {
                canEdit: CommunityPolicy.canEdit(user, community),
                canDelete: CommunityPolicy.canDelete(user, community),
                canViewMembers: CommunityPolicy.canViewMembers(user, community),
                canJoin: MembershipPolicy.canJoin(user, community, isMember),
                canLeave: MembershipPolicy.canLeave(user, community, isMember),
            },
        };
    }

    async updateCoreCommunity(
        communityId: string,
        data: CommunityInput,
        user: User,
        previousImageUrl?: string
    ) {
        const community = await this.getCoreCommunity(communityId);

        if (!community) {
            throw new Error('Comunidad no encontrada');
        }

        // Verificar permisos
        if (!CommunityPolicy.canEdit(user, community)) {
            throw new Error('No tienes permisos para editar esta comunidad');
        }

        // Actualizar la comunidad
        const updated = await this.communityRepository.update(communityId, data);

        // Si la imagen cambió y hay una imagen anterior, eliminarla
        if (previousImageUrl && data.imageUrl !== previousImageUrl) {
            try {
                await deleteFileFromUploadThing(previousImageUrl);
                console.log('Imagen anterior eliminada correctamente:', previousImageUrl);

            } catch (error) {
                // No lanzar error aquí, la actualización ya se hizo
                console.error('Error al eliminar la imagen anterior:', error);
            }
        }

        return updated;
    }

    async deleteCoreCommunity(communityId: string, password: string, user: User) {

        // Obtener comunidad
        const community = await this.getCoreCommunity(communityId)

        // Revisar permisos
        if ( !CommunityPolicy.canDelete(user, community!) ) throw new Error('Acceso Denegado.');

        // Verificar password
        const isValidPassword = await checkPassword(password)
        if ( !isValidPassword ) {
            return {
                error: 'Password Inválido.',
                success: ''
            }
        }

        // Eliminar la imagen de UploadThing si existe
        if ( community?.imageUrl ) {
            await deleteFileFromUploadThing(community.imageUrl)
        }

        // Eliminar la comunidad
        await this.communityRepository.delete(communityId)

        return {
            error: '',
            success: 'CoreCommunity Eliminada Correctamente.'
        }
    }

    async getUncomingConnectsByCommunityId(communityId: string) {
        return await this.connectRepository.findUncomingByCommunity(communityId)
    }

    async getFeatureCommunities() {
        return this.communityRepository.findFeature()
    }
}

export const communityService = new CommunityService(communityRepository, membershipRepository, connectRepository, profileRepository)
