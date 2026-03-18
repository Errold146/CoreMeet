import { User } from "better-auth";
import { CommunityInput } from "../schemas/communitySchema";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import {
    communityRepository,
    ICommunityRepository,
} from "./CommunityRepository";
import { deleteFileFromUploadThing } from "@/src/shared/utils/uploadthing-utils";

class CommunityService {
    constructor(private communityRepository: ICommunityRepository) {}

    async createCoreCommunity(data: CommunityInput, userId: string) {
        const community = await this.communityRepository.create({
            ...data,
            createdBy: userId,
        });
    }

    async getUserCommunities(user: User) {
        const communities = await this.communityRepository.findByUser(user.id);
        const enriched = await Promise.all(
            communities.map(async (community) => {
                const isMember = true;
                const isAdmin = CommunityPolicy.isAdmin(user, community);

                return {
                    data: community,
                    context: {
                        isMember,
                        isAdmin,
                    },
                    permissions: {
                        canEdit: CommunityPolicy.canEdit(user, community),
                        canDelete: CommunityPolicy.canDelete(user, community),
                        canViewMembers: CommunityPolicy.canViewMembers(
                            user,
                            community,
                        ),
                        canJoin: MembershipPolicy.canJoin(
                            user,
                            community,
                            isMember,
                        ),
                        canLeave: MembershipPolicy.canLeave(
                            user,
                            community,
                            isMember,
                        ),
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

    async getCoreCommunityDetails(communityId: string, user: User) {

        const community = await this.getCoreCommunity(communityId)

        if ( !community ) {
            return null
        }

        const isMember = false
        const isAdmin = CommunityPolicy.isAdmin(user, community)

        return {
            data: community,
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
}

export const communityService = new CommunityService(communityRepository);
