import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircleIcon, BoltIcon } from "@heroicons/react/24/outline";

import { ProfileCommunityWithConnects, ProfileConnect } from "../types";
import { ProfileConnectMiniCard } from "./ProfileConnectMiniCard";
import { pluralize } from "@/src/shared/utils";

interface Props {
    community: ProfileCommunityWithConnects;
}

export function ProfileCommunityCard({ community }: Props) {
    const visibleConnects = community.connects.slice(0, 4);
    const remainingCount = community.connects.length - visibleConnects.length;

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-azul-200 hover:border-azul-400 hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Imagen de la comunidad */}
            <div className="relative h-44 w-full overflow-hidden bg-azul-100 shrink-0">
                <Image
                    src={community.imageUrl}
                    alt={community.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mirage-900/70 via-mirage-900/10 to-transparent" />

                {/* Nombre sobre el banner */}
                <div className="absolute bottom-4 left-4 right-16">
                    <h3 className="text-xl font-bold text-white line-clamp-1 drop-shadow-md">
                        {community.name}
                    </h3>
                </div>

                {/* Badge de CoreConnects */}
                <div className="absolute top-3 right-3 bg-azul-600/85 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {community.connects.length} {pluralize('CoreConnect', community.connects.length)}
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-5 gap-4">
                {/* Descripción */}
                <p className="text-mirage-600 text-sm line-clamp-2 flex-none">
                    {community.description}
                </p>

                {/* Sección de CoreConnects */}
                <div className="flex flex-col gap-2 flex-1">
                    {visibleConnects.length > 0 ? (
                        <>
                            <div className="flex items-center gap-2">
                                <BoltIcon className="w-4 h-4 text-naranja-500 shrink-0" />
                                <span className="text-xs font-bold text-mirage-700 uppercase tracking-wide">
                                    CoreConnects
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {visibleConnects.map((connect: ProfileConnect) => (
                                    <ProfileConnectMiniCard key={connect.id} connect={connect} />
                                ))}
                            </div>
                            {remainingCount > 0 && (
                                <Link
                                    href={`/communities/${community.id}` as any}
                                    className="text-xs text-azul-600 hover:text-azul-800 font-semibold text-center pt-1 hover:underline transition-colors"
                                >
                                    +{remainingCount} CoreConnect{remainingCount > 1 ? 's' : ''} más
                                </Link>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center justify-center flex-1 py-4 rounded-xl bg-mirage-50 border border-dashed border-mirage-200">
                            <p className="text-xs text-mirage-400 italic">Sin CoreConnects aún</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="h-px bg-linear-to-r from-azul-100 via-naranja-100 to-azul-100" />
                <Link
                    href={`/communities/${community.id}` as any}
                    className="w-full flex items-center justify-center gap-2 bg-azul-50 hover:bg-azul-500 text-azul-700 hover:text-white border border-azul-300 hover:border-azul-500 rounded-xl py-2.5 px-4 text-sm font-semibold transition-all duration-200 group/btn"
                >
                    <span>Ver comunidad</span>
                    <ArrowRightCircleIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
