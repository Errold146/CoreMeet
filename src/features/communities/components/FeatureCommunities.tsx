import { UserGroupIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/src/shared/components/typography";
import { communityService } from "../services/CommunityService";
import { PublicCommunityCard } from "./PublicCommunityCard";

export async function FeatureCommunities() {

    const communities = await communityService.getFeatureCommunities()

    return (
        <section className="max-w-7xl mx-auto my-16 space-y-8 px-4 sm:px-6 lg:px-8">
            <Heading level={2} className="text-center">CoreCommunities Destacadas</Heading>

            {communities.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {communities.map(community => (
                        <PublicCommunityCard community={community} key={community.id} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                    <div className="bg-azul-100 rounded-full p-5">
                        <UserGroupIcon className="w-10 h-10 text-azul-400" />
                    </div>
                    <p className="text-lg font-semibold text-mirage-700">No hay comunidades aún</p>
                    <p className="text-sm text-mirage-400 max-w-xs">
                        Sé el primero en crear una CoreCommunity y reúne a personas con tus mismos intereses.
                    </p>
                </div>
            )}
        </section>
    )
}
