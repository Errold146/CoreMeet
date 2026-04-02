import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

import { User } from "../../auth";
import Link from "next/link";

type Props = {
    organizer: User
}

export function OrganizerCard({ organizer }: Props) {

    const { image, name, bio, id } = organizer

    return (
        <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-mirage-100 shadow-lg">
            {/* Cabecera con gradiente */}
            <div className="bg-linear-to-br from-mirage-500 to-mirage-700 px-5 py-3">
                <h3 className="text-white font-bold text-center text-base tracking-wide">Organizador</h3>
            </div>

            {/* Contenido */}
            <div className="p-5 flex items-center gap-4">
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-linear-to-br from-azul-400 to-naranja-400 rounded-full blur-md opacity-40 scale-110" />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-azul-200">
                        <Image
                            src={image ?? "/default.jpg"}
                            alt={`Imagen del organizador: ${name}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-2">
                    <p className="font-black text-mirage-900 truncate">{name}</p>
                    {bio && (
                        <p className="text-xs text-mirage-500 leading-relaxed line-clamp-2 italic">
                            &ldquo;{bio}&rdquo;
                        </p>
                    )}
                    <Link
                        href={`/profile/${id}`}
                        className="flex items-center justify-center gap-2 bg-linear-to-r from-azul-500 to-azul-600 hover:from-azul-600 hover:to-azul-700 text-azul-50 text-xs font-semibold py-2 px-3 rounded-xl shadow hover:shadow-md transition-color duration-200 group cursor-pointer"
                    >
                        <UserIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Ver Perfil
                    </Link>
                </div>
            </div>

            {/* Barra inferior decorativa */}
            <div className="h-1 bg-linear-to-r from-azul-400 via-mirage-400 to-naranja-400" />
        </div>
    );
}
