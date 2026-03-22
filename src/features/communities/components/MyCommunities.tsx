import Link from "next/link";
import { PlusCircleIcon, UsersIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { requireAuth } from "@/src/lib/auth-server"
import { redirect } from "next/navigation"
import { communityService } from "../services/CommunityService";
import { CommunityCard } from "./CommunityCard";
import { NotCommunities } from "./NotCommunities";

export async function MyCommunities() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    const communities = await communityService.getUserCommunities(session.user)

    return (
        communities && communities.length > 0 ? (
            <div className="mt-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-mirage-800">
                        Mis CoreCommunities
                        <span className="ml-3 text-lg font-normal text-azul-600">
                            ({communities.length})
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {communities.map((community) => (
                        <CommunityCard key={community.data.id} community={community} />
                    ))}
                </div>
            </div>
        ): (
            <NotCommunities />
        )

    )
}
