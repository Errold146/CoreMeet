import { desc, eq, sql } from "drizzle-orm";

import { db } from "@/src/db";
import { community, communityMembers } from "@/src/db/schema";
import { CommunityWithMembersCount, InserCoreCommunity, SelectCoreCommunity, SelectCoreCommunityWithAdmin } from "../types/community.types";

export interface ICommunityRepository {
    create(data: InserCoreCommunity): Promise<SelectCoreCommunity>
    findByUser(userId: string, limit?: number): Promise<SelectCoreCommunity[]>
    findById(communityId: string): Promise<SelectCoreCommunity | undefined>
    findByIdWithAdmin(communityId: string): Promise<SelectCoreCommunityWithAdmin | undefined>
    update(communityId: string, data: Partial<InserCoreCommunity>): Promise<SelectCoreCommunity | undefined>
    delete(communityId: string): Promise<void>
    findFeature(): Promise<CommunityWithMembersCount[]>
}

class CommunityRepository implements ICommunityRepository {
    async create(data: InserCoreCommunity): Promise<SelectCoreCommunity> {
        const [res] = await db.insert(community).values(data).returning()
        return res
    }

    async findByUser(userId: string, limit = 10): Promise<SelectCoreCommunity[]> {
        const communities = await db.select() .from(community).where(eq(community.createdBy, userId)).limit(limit)
        return communities
    }

    async findById(communityId: string): Promise<SelectCoreCommunity | undefined> {
        const [res] = await db.select().from(community).where(eq(community.id, communityId)).limit(1)
        return res
    }

    async findByIdWithAdmin(communityId: string): Promise<SelectCoreCommunityWithAdmin | undefined> {
        const res = await db.query.community.findFirst({
            where: (c, { eq }) => eq(c.id, communityId),
            with: { createdBy: true }
        })
        if (!res) return undefined
        const { createdBy: adminUser, ...communityData } = res as typeof res & { createdBy: import('better-auth').User }
        // Keep createdBy as string ID so policies (MembershipPolicy, CommunityPolicy) continue to work
        return { ...communityData, createdBy: adminUser.id, admin: adminUser }
    }

    async update(communityId: string, data: Partial<InserCoreCommunity>): Promise<SelectCoreCommunity | undefined> {
        const [res] = await db.update(community).set(data).where(eq(community.id, communityId)).returning()
        return res
    }

    async delete(communityId: string): Promise<void> {
        await db.delete(community).where(eq(community.id, communityId))
    }

    async findFeature(): Promise<CommunityWithMembersCount[]> {
        const membersCount = sql<string>`(
            SELECT COUNT(*)
            FROM ${communityMembers}
            WHERE ${communityMembers.communityId} = ${community.id}
        )`

        const res = await db.select({
            id: community.id,
            name: community.name,
            description: community.description,
            imageUrl: community.imageUrl,
            membersCount
        }).from(community).orderBy(desc(membersCount))

        return res
    }
}

export const communityRepository = new CommunityRepository()
