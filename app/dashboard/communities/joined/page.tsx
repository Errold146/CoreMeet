import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";

const title: string = "Tus CoreCommunities";

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description:
        "Administración de las comunidades de CoreCommunities en CoreMeet",
};

export default function JoinedPage() {
    return (
        <>
            <Heading>{title}</Heading>

            <Link
                href="/dashboard/communities"
                className="mt-5 inline-flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
            >
                <ArrowLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Volver a CoreCommunities</span>
            </Link>
        </>
    );
}
