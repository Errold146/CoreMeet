import { eq, and, count } from "drizzle-orm";

import { db } from "@/src/db";
import { communityMembers } from "@/src/db/schema";
import { InsertCommunityMember, JoinedCommunity } from "../types/community.types";

export interface IMembershipRepository {
    addMember(data: InsertCommunityMember): Promise<void>
    removeMember(communityId: string, userId: string): Promise<void>
    isMember(communityId: string, userId: string): Promise<boolean>
    findJoinedCommunities(userId: string): Promise<JoinedCommunity[]>
    getMembersCount(communityId: string): Promise<number>
}

class MembershipRepository implements IMembershipRepository {

    async addMember(data: InsertCommunityMember): Promise<void> {
        await db.insert(communityMembers).values(data)
    }

    async removeMember(communityId: string, userId: string): Promise<void> {
        await db.delete(communityMembers)
            .where(
                and(
                    eq(communityMembers.communityId, communityId),
                    eq(communityMembers.userId, userId)
                )
            )
    }

    async isMember(communityId: string, userId: string): Promise<boolean> {
        const [member] = await db.select()
            .from(communityMembers)
            .where(
                and(
                    eq(communityMembers.communityId, communityId),
                    eq(communityMembers.userId, userId)
                )
            )
            .limit(1)
        return !!member
    }

    async findJoinedCommunities(userId: string): Promise<JoinedCommunity[]> {
        const joined = await db.query.communityMembers.findMany({
            where: eq(communityMembers.userId, userId),
            with: {
                community: true,
                user: true
            }
        })

        return joined
    }

    async getMembersCount(communityId: string): Promise<number> {
        const [res] = await db.select({total: count()}).from(communityMembers).where(eq(communityMembers.communityId, communityId))
        return res.total
    }
}

export const membershipRepository = new MembershipRepository()
