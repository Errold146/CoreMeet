import Link from "next/link";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/components/typography";
import { requireAuth } from "@/src/lib/auth-server";
import { generatePageTitle } from "@/src/shared/utils";
import { communityService, EditCoreCommunity } from "@/src/features/communities";

export async function generateMetadata(props: PageProps<'/dashboard/communities/[id]/edit'>): Promise<Metadata> {

    const { id } = await props.params
    const res = await communityService.getCoreCommunity(id)

    return {
        title: generatePageTitle(`Editar CoreCommunity - ${res?.name}`),
        description: res?.description,
        openGraph: {
            title: 'Compartir CoreCommunity',
            images: [
                {
                    url: res?.imageUrl!
                }
            ]
        }
    }
}

export default async function EditCommunityPage(props: PageProps<'/dashboard/communities/[id]/edit'>) {

    const title: string = "Editar CoreCommunity"
    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    const { id } = await props.params
    const community = await communityService.getCoreCommunityDetails(id, session.user)
    if ( !community ) notFound();
    if ( !community.permissions.canEdit ) redirect('/dashboard/communities');

    return (
        <>
            <Heading>{title} - {community.data.name}</Heading>

            <Link
                href="/dashboard/communities"
                className="mt-5 inline-flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
            >
                <ArrowLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Volver a CoreCommunities</span>
            </Link>

            <EditCoreCommunity
                community={community.data}
            />
        </>
    )
}
