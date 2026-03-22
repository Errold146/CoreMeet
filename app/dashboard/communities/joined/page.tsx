import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { requireAuth } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";
import { CommunityCard, membershipService, NotCommunities } from "@/src/features/communities";

const title: string = "Tus CoreCommunities";

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: "Administración de CoreCommunities en CoreMeet",
};

export default async function JoinedPage() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    const communities = await membershipService.getJoinedCommunites(session.user)

    return (
        <>
            <Heading>{title}</Heading>

            <Link
                href="/dashboard/communities"
                className="my-5 inline-flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
            >
                <ArrowLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Volver a CoreCommunities</span>
            </Link>

            {communities.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {communities.map(comm => <CommunityCard key={comm.data.id} community={comm} />)}
                </div>
            ) : (
                <NotCommunities />
            )}
        </>
    );
}
