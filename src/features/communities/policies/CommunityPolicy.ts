import { User } from "better-auth";
import { SelectCoreCommunity } from "../types/community.types";

export class CommunityPolicy {
    static isAdmin(user: User, community: SelectCoreCommunity): boolean {
        return user.id === community.createdBy
    }

    static canEdit(user: User, community: SelectCoreCommunity): boolean {
        return this.isAdmin(user, community)
    }

    static canDelete(user: User, community: SelectCoreCommunity): boolean {
        return this.isAdmin(user, community)
    }

    static canViewMembers(user: User, community: SelectCoreCommunity): boolean {
        return this.isAdmin(user, community)
    }
}
