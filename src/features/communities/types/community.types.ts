import { community } from "@/src/db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type InserCoreCommunity = InferInsertModel<typeof community>;
export type SelectCoreCommunity = InferSelectModel<typeof community>;

export type CommmunityContext = {
    isMember: boolean;
    isAdmin: boolean;
};

export type CommunityPermissions = {
    canEdit: boolean;
    canDelete: boolean;
    canViewMembers: boolean;
    canJoin: boolean;
    canLeave: boolean;
};

export type CommunityWithPermissions = {
    data: SelectCoreCommunity
    context: CommmunityContext
    permissions: CommunityPermissions
}
