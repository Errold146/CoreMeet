import Link from "next/link";
import Image from "next/image";
import { UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { CommunityWithMembersCount } from "../types/community.types";
import { pluralize } from "@/src/shared/utils";

interface PublicCommunityCardProps {
    community: CommunityWithMembersCount
}

export function PublicCommunityCard({ community }: PublicCommunityCardProps) {
    return (
        <Link
            href={`/communities/${community.id}`}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-azul-100 hover:border-azul-400 flex flex-col"
        >
            {/* Imagen */}
            <div className="relative h-40 w-full overflow-hidden bg-azul-100">
                <Image
                    src={community.imageUrl}
                    alt={community.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul-950/60 to-transparent" />

                {/* Badge de miembros */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-azul-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    <UserGroupIcon className="w-3.5 h-3.5 text-naranja-300 shrink-0" />
                    {community.membersCount} {pluralize("miembro", +community.membersCount)}
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold text-mirage-800 group-hover:text-azul-600 transition-colors leading-snug line-clamp-1">
                    {community.name}
                </h3>

                <p className="text-sm text-mirage-500 leading-relaxed line-clamp-3 flex-1">
                    {community.description}
                </p>

                <div className="flex items-center justify-end pt-3 border-t border-azul-100">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-azul-600 group-hover:text-naranja-500 transition-colors">
                        Ver comunidad
                        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </Link>
    )
}
