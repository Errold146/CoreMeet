import Link from "next/link";
import { Metadata } from "next";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";

const title = "Administra tus CoreConnects"

export const metadata: Metadata = {
    title: generatePageTitle(title),
    description: 'Administrador de tus CoreConnects'
}

export default function CoreConnectsPage() {
    return (
        <>
            <Heading>{title}</Heading>

            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <Link
                    href="/dashboard/connects/create"
                    className="mt-5 flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
                >
                    <PlusCircleIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span>Crear CoreConnects</span>
                </Link>
            </div>
        </>
    )
}
