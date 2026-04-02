import Image from "next/image";
import { UserCircleIcon, BuildingLibraryIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

import { FullProfile } from "../types";
import { pluralize } from "@/src/shared/utils";

interface Props {
    profile: FullProfile;
}

export function ProfileCard({ profile }: Props) {
    const totalConnects = profile.createdCommunities.reduce(
        (acc, c) => acc + c.connects.length,
        0
    );

    return (
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-azul-200">
            {/* Decoraciones de fondo */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-linear-to-bl from-azul-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-linear-to-tr from-naranja-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Banner superior */}
            <div className="h-36 bg-linear-to-r from-azul-600 via-azul-400 to-naranja-400 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[20px_20px]" />
            </div>

            {/* Contenido del perfil */}
            <div className="relative z-10 px-6 md:px-10 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16 mb-6">
                    {/* Avatar */}
                    <div className="relative size-28 md:size-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-azul-100 shrink-0">
                        {profile.image ? (
                            <Image
                                src={profile.image}
                                alt={`Avatar de ${profile.name}`}
                                fill
                                sizes="128px"
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <UserCircleIcon className="w-full h-full text-azul-300 p-3" />
                        )}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-3 sm:mb-4">
                        <div className="bg-azul-50 border border-azul-200 rounded-2xl px-4 py-3 text-center min-w-22">
                            <div className="text-2xl font-black text-azul-700">
                                {profile.createdCommunities.length}
                            </div>
                            <div className="text-xs text-mirage-500 font-medium flex items-center justify-center gap-1 mt-0.5">
                                <BuildingLibraryIcon className="w-3 h-3" />
                                {pluralize('Comunidad', profile.createdCommunities.length)}
                            </div>
                        </div>
                        <div className="bg-naranja-50 border border-naranja-200 rounded-2xl px-4 py-3 text-center min-w-22">
                            <div className="text-2xl font-black text-naranja-600">{totalConnects}</div>
                            <div className="text-xs text-mirage-500 font-medium flex items-center justify-center gap-1 mt-0.5">
                                <CalendarDaysIcon className="w-3 h-3" />
                                {pluralize('CoreConnect', totalConnects)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nombre y bio */}
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-black text-mirage-900">{profile.name}</h1>
                    {profile.bio ? (
                        <p className="text-mirage-600 leading-relaxed max-w-2xl">{profile.bio}</p>
                    ) : (
                        <p className="text-mirage-400 italic text-sm">Sin bio todavía</p>
                    )}
                </div>
            </div>

            {/* Acento inferior */}
            <div className="h-1.5 bg-linear-to-r from-azul-500 via-naranja-400 to-azul-500" />
        </div>
    );
}
