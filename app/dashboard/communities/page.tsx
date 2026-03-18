import Link from "next/link";
import { Metadata } from "next";
import { PlusCircleIcon, UsersIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { MyCommunities } from "@/src/features/communities";

const title: string = "Administra tus Comunidades";

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: "Administración de las comunidades de CoreCommunities en CoreMeet",
};

export default function CommunitiesPage() {
    return (
        <>
            <Heading>{title}</Heading>

            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <Link
                    href="/dashboard/communities/create"
                    className="mt-5 flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
                >
                    <PlusCircleIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span>Crear CoreCommunity</span>
                </Link>
                <Link
                    href="/dashboard/communities/joined"
                    className="mt-5 flex items-center justify-center gap-3 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border border-naranja-400 hover:border-naranja-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
                >
                    <UsersIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span>CoreCommunities a las que te uniste</span>
                </Link>
            </div>

            <MyCommunities />
        </>
    );
}
