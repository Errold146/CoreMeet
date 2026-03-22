"use client"

import { toast } from "sonner";
import { useState, useTransition } from "react";
import { TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

import { CommunityPermissions } from "../types/community.types";
import { joinCommunityAction, leaveCommunityAction } from "../actions/membership-action";

interface Props {
    permissions: CommunityPermissions
    communityId: string
}

export function CommunityMembership({ permissions, communityId }: Props) {

    const [canJoin, setCanJoin] = useState(permissions.canJoin)
    const [canLeave, setCanLeave] = useState(permissions.canLeave)
    const [isPending, startTransition] = useTransition()

    const handleJoin = () => {
        startTransition(async () => {
            const { error, success } = await joinCommunityAction(communityId)

            if (error) {
                toast.error(error)
            }

            if (success) {
                toast.success(success)
                setCanJoin(false)
                setCanLeave(true)
            }
        })
    }

    const handleLeave = () => {
        startTransition(async () => {
            const { error, success } = await leaveCommunityAction(communityId)

            if (error) {
                toast.error(error)
            }

            if (success) {
                toast.success(success)
                setCanJoin(true)
                setCanLeave(false)
            }
        })
    }

    return (
        <>
            {canJoin && (
                <button
                    className="w-full sm:w-fit flex items-center justify-center gap-2 bg-mirage-200 text-mirage-800 hover:text-mirage-50 hover:bg-mirage-500 border border-mirage-400 hover:border-mirage-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleJoin}
                    disabled={isPending}
                >
                    <UsersIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    {isPending ? 'Uniéndote...' : 'Inscribirme a CoreCommunity'}
                </button>
            )}

            {canLeave && (
                <button
                    className="w-full sm:w-fit flex items-center justify-center gap-2 bg-red-200 text-red-800 hover:text-red-50 hover:bg-red-500 border border-red-400 hover:border-red-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleLeave}
                    disabled={isPending}
                >
                    <TrashIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    {isPending ? 'Abandonando...' : 'Abandonar CoreCommunity'}
                </button>
            )}

        </>
    )
}
