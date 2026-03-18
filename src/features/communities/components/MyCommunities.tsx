import Link from "next/link";
import { PlusCircleIcon, UsersIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { requireAuth } from "@/src/lib/auth-server"
import { redirect } from "next/navigation"
import { communityService } from "../services/CommunityService";
import { CommunityCard } from "./CommunityCard";

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
            <div className="mt-16 flex flex-col items-center justify-center p-12 bg-linear-to-br from-azul-50 via-naranja-50 to-azul-50 rounded-2xl shadow-2xl border-2 border-dashed border-azul-300 hover:border-azul-400 transition-all duration-300">
                <div className="relative">
                    <div className="absolute inset-0 bg-azul-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <UsersIcon className="relative w-24 h-24 text-azul-500 mb-6 animate-bounce" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <SparklesIcon className="w-6 h-6 text-naranja-500 animate-pulse" />
                    <h3 className="text-3xl font-bold text-mirage-800">
                        ¡Comienza tu Aventura!
                    </h3>
                    <SparklesIcon className="w-6 h-6 text-naranja-500 animate-pulse" />
                </div>

                <p className="text-center text-lg text-mirage-600 mb-8 max-w-2xl">
                    Aún no tienes CoreCommunities creadas. Es el momento perfecto para dar el primer paso y construir una comunidad increíble.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                    <Link
                        href="/dashboard/communities/create"
                        className="flex-1 flex items-center justify-center gap-3 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border-2 border-azul-400 hover:border-azul-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl text-lg font-semibold py-4 px-8 group"
                    >
                        <PlusCircleIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        <span>Crear mi CoreCommunity</span>
                    </Link>

                    <Link
                        href="/dashboard/communities/joined"
                        className="flex-1 flex items-center justify-center gap-3 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border-2 border-naranja-400 hover:border-naranja-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl text-lg font-semibold py-4 px-8 group"
                    >
                        <UsersIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span>Explorar Comunidades</span>
                    </Link>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-mirage-500">
                    <div className="w-2 h-2 rounded-full bg-azul-500 animate-ping"></div>
                    <span>Conecta con personas que comparten tus intereses</span>
                </div>
            </div>
        )

    )
}
