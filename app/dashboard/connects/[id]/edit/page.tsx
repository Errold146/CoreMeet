import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { requireAuth } from "@/src/lib/auth-server";
import { generatePageTitle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/components/typography";
import { communityService } from "@/src/features/communities";
import { EditConnect } from "@/src/features/connects/components";
import { connectService } from "@/src/features/connects/services/ConnectSevice";
import { categoryService } from "@/src/features/connects/services/CategoryService";

export async function generateMetadata({params}: PageProps<'/dashboard/connects/[id]/edit'>): Promise<Metadata> {
    const { id } = await params
    const connect = await connectService.getConnectById(id)

    return {
        title: generatePageTitle(`Editar: ${connect.title}`),
        description: connect.details
    }
}

export default async function EditCoreConnect(props: PageProps<'/dashboard/connects/[id]/edit'>) {

    const { session } = await requireAuth()
    if ( !session ) redirect('/auth/login');

    const { id } = await props.params
    const connect = await connectService.getConnectWitjPermissions(id, session.user)
    if ( !connect.context.isAdmin ) throw new Error('Acceso Denegado.');

    const [communities, categories] = await Promise.all([
        communityService.getCommunitiesForAPI(session.user.id),
        categoryService.getAllCategories(),
    ])

    return (
        <>
            <Heading>Editar CoreConnect: {connect.data.title}</Heading>

            <div className="flex justify-between flex-col lg:flex-row gap-4">
                <Link
                    href="/dashboard/connects"
                    className="mt-5 flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold py-4 px-8 group"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArrowLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span>Volver a CoreConnects</span>
                </Link>
            </div>

            <EditConnect
                connect={connect.data}
                communities={communities}
                categories={categories}
            />
        </>
    )
}

