import { User } from "better-auth";
import { eq } from "drizzle-orm";

import { db } from "@/src/db";
import { users } from "@/src/db/schema";
import { communityRepository } from "./CommunityRepository";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import { membershipRepository, IMembershipRepository } from "./MembershipRepository";
import { INotificationService, notificationService } from '../../notifications/services/NotificationService';
import { INotificationRepository, notificationRepository } from '../../notifications/services/NotificationRepository';

class MembershipService {
    constructor(
        private membershipRepository: IMembershipRepository,
        private notificationRepository: INotificationRepository,
        private notificationService: INotificationService
    ){}

    async joinCommunity(communityId: string, userId: string) {

        const community = await communityRepository.findById(communityId);
        if ( !community ) return;

        // Verificar si ya es miembro
        const isMember = await this.membershipRepository.isMember(
            communityId,
            userId,
        );
        if (isMember) {
            return {
                error: "Ya eres miembro de esta comunidad.",
                success: "",
            };
        }

        // Añadir miembro
        await this.membershipRepository.addMember({
            communityId,
            userId,
        });

        // Obtener el usuario
        const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);

        // Crear notificación
        await this.notificationService.createAndNotify({
            userId: community?.createdBy,
            actorName: user?.name || 'Usuario',
            message: 'Se unio a tu CoreCommunity',
            target: community.name,
        })

        return {
            error: "",
            success: "Te has unido a la comunidad correctamente.",
        };
    }

    async leaveCommunity(communityId: string, userId: string) {
        // Verificar si es miembro
        const isMember = await this.membershipRepository.isMember(
            communityId,
            userId,
        );
        if (!isMember) {
            return {
                error: "No eres miembro de esta comunidad.",
                success: "",
            };
        }

        // Verificar si es el creador (no puede abandonar)
        const community = await communityRepository.findById(communityId);
        if (community?.createdBy === userId) {
            return {
                error: "El creador no puede abandonar la comunidad. Debes eliminarla.",
                success: "",
            };
        }

        // Remover miembro
        await this.membershipRepository.removeMember(communityId, userId);

        return {
            error: "",
            success: "Has abandonado la comunidad.",
        };
    }

    async isMember(communityId: string, userId: string): Promise<boolean> {
        return await this.membershipRepository.isMember(communityId, userId);
    }

    async getJoinedCommunites(user: User) {
        const joined = await this.membershipRepository.findJoinedCommunities(
            user.id,
        );

        const enriched = await Promise.all(
            joined.map(async ({community}) => {
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
                        canViewMembers: CommunityPolicy.canViewMembers( user, community),
                        canJoin: MembershipPolicy.canJoin(user, community, isMember),
                        canLeave: MembershipPolicy.canLeave(user, community, isMember),
                    },
                };
            }),
        );

        return enriched;
    }
}

export const membershipService = new MembershipService(membershipRepository, notificationRepository, notificationService);
