import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import { SelectConnect } from "../../connects/types";
import { displayDate } from "@/src/shared/utils";

type Props = {
    connect: SelectConnect
}

export function CommunityWithConnectsCard({ connect }: Props) {
    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-azul-100 hover:border-azul-400 flex flex-col">
            {/* Imagen */}
            <div className="relative h-52 w-full overflow-hidden bg-azul-100 shrink-0">
                <Image
                    src={connect.image}
                    alt={`Imagen del CoreConnect: ${connect.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mirage-900/40 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-6">
                {/* Fecha */}
                <div className="flex items-center gap-2 text-xs font-semibold text-azul-600 mb-3">
                    <CalendarDaysIcon className="w-4 h-4 shrink-0" />
                    <span>{displayDate(connect.date)}</span>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-mirage-900 mb-2 leading-snug group-hover:text-azul-600 transition-colors line-clamp-2">
                    <Link
                        href={`/connects/${connect.id}`}
                        className="hover:underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {connect.title}
                    </Link>
                </h3>

                {/* Descripción */}
                <p className="text-mirage-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
                    {connect.details}
                </p>

                {/* Acción */}
                <div className="h-px bg-linear-to-r from-azul-200 via-naranja-200 to-azul-200 mb-4" />
                <Link
                    href={`/connects/${connect.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-azul-500 hover:bg-azul-600 text-white transition-all duration-200 shadow-md hover:shadow-lg rounded-xl text-sm font-bold py-2.5 px-4 group/btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Ver Detalles</span>
                    <ArrowRightCircleIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
