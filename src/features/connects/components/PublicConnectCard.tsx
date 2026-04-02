import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, ClockIcon, MapPinIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

import { SelectConnect } from "../types";
import { displayDate } from "@/src/shared/utils";

interface PublicConnectCardProps {
    connect: SelectConnect
}

export function PublicConnectCard({ connect }: PublicConnectCardProps) {
    const timeDisplay = connect.time.slice(0, 5)

    return (
        <Link
            href={`/connects/${connect.id}`}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-azul-100 hover:border-azul-400 flex flex-col"
        >
            {/* Imagen */}
            <div className="relative h-44 w-full overflow-hidden bg-azul-100">
                <Image
                    src={connect.image}
                    alt={connect.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul-950/50 to-transparent" />

                {/* Badge virtual / presencial */}
                <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md text-white ${connect.virtual ? "bg-mirage-600" : "bg-naranja-500"}`}>
                    {connect.virtual
                        ? <><VideoCameraIcon className="w-3.5 h-3.5" /> Virtual</>
                        : <><MapPinIcon className="w-3.5 h-3.5" /> Presencial</>
                    }
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold text-mirage-800 group-hover:text-azul-600 transition-colors line-clamp-2 leading-snug">
                    {connect.title}
                </h3>

                <p className="text-sm text-mirage-500 line-clamp-2 leading-relaxed">
                    {connect.details}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-azul-100 text-xs text-mirage-500">
                    <span className="flex items-center gap-1.5">
                        <CalendarDaysIcon className="w-4 h-4 text-azul-500 shrink-0" />
                        {displayDate(connect.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-azul-500 shrink-0" />
                        {timeDisplay}
                    </span>
                </div>
            </div>
        </Link>
    )
}
