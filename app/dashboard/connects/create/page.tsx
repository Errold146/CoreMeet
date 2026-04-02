import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { CreateConnect } from "@/src/features/connects/components";
import { communityService } from "@/src/features/communities";
import { categoryService } from "@/src/features/connects/services/CategoryService";
import { requireAuth } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";

const title = "Crear CoreConnect"

export const metadata: Metadata = {
    title: generatePageTitle(title)
}

export default async function CreateConnectsPage() {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');
    const communities = session ? await communityService.getCommunitiesForAPI(session.user.id) : []
    const categories = await categoryService.getAllCategories()

    return (
        <>
            <Heading>{title}</Heading>

            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <Link
                    href="/dashboard/connects"
                    className="mt-5 flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
                                  >
                    <ArrowLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span>Volver a CoreConnects</span>
                </Link>
            </div>

            <CreateConnect communities={communities} categories={categories} />
        </>
    )
}
