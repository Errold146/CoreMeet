import { Heading } from "@/src/shared/components/typography";
import { communityService } from "../services/CommunityService";
import { CommunityWithConnectsCard } from "./CommunityWithConnectsCard";

type Props = {
    communityId: string
}

export async function UpcomingCommunityConnects({ communityId }: Props) {

    const connects = await communityService.getUncomingConnectsByCommunityId(communityId)

    return (
        <section className="max-w-7xl mx-auto mt-10">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 lg:p-0">
                {connects.length ? connects.map(connect => (
                    <CommunityWithConnectsCard key={connect.id} connect={connect} />
                )): (
                    <p className="text-center py-10 text-lg text-mirage-600 col-span-1 lg:col-span-3">No Hay Próximos Meetis en esta comunidad</p>
                )}
            </div>
        </section>
    )
}
