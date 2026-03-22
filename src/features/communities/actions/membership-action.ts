"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { membershipService } from "../services/MembershipService";

export async function joinCommunityAction(communityId: string) {
    const { session } = await requireAuth()
    if (!session) {
        return {
            error: 'Acceso denegado.',
            success: ''
        }
    }

    const res = await membershipService.joinCommunity(communityId, session.user.id)
    return res
}

export async function leaveCommunityAction(communityId: string) {
    const { session } = await requireAuth()
    if (!session) {
        return {
            error: 'Acceso denegado.',
            success: ''
        }
    }

    const res = await membershipService.leaveCommunity(communityId, session.user.id)
    return res
}
