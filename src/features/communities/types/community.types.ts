import { InferInsertModel, InferSelectModel } from "drizzle-orm";

import { User } from "../../auth";
import { community, communityMembers } from "@/src/db/schema";

export type InserCoreCommunity = InferInsertModel<typeof community>
export type SelectCoreCommunity = InferSelectModel<typeof community>

export type InsertCommunityMember = InferInsertModel<typeof communityMembers>
export type SelectCommunityMember = InferSelectModel<typeof communityMembers>

export type JoinedCommunity = SelectCommunityMember & {
    community: SelectCoreCommunity
    user: User
}

export type CommmunityContext = {
    isMember: boolean
    isAdmin: boolean
}

export type CommunityPermissions = {
    canEdit: boolean
    canDelete: boolean
    canViewMembers: boolean
    canJoin: boolean
    canLeave: boolean
}

export type CommunityWithPermissions = {
    data: SelectCoreCommunity
    membersCount: number
    context: CommmunityContext
    permissions: CommunityPermissions
}
