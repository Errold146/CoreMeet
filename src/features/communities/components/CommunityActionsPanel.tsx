import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { CommunityPermissions } from "../types/community.types";
import { CommunityMembership } from "./CommunityMembership";

interface Props {
    permissions: CommunityPermissions
    communityId: string
}

export function CommunityActionsPanel({ permissions, communityId }: Props) {
    return (
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3">
            {permissions.canEdit && (
                <Link
                    href={`/dashboard/communities/${communityId}/edit`}
                    className="w-full sm:w-fit flex items-center justify-center gap-2 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border border-naranja-400 hover:border-naranja-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-10 group/btn"
                                  >
                    <PencilSquareIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    <span>Editar</span>
                </Link>
            )}

            {permissions.canJoin || permissions.canLeave ? (
                <CommunityMembership permissions={permissions} communityId={communityId} />
            ): null}
        </div>
    );
}
