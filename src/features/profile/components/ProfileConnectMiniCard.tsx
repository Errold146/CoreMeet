import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { ProfileConnect } from "../types";
import { displayDate } from "@/src/shared/utils";

interface Props {
    connect: ProfileConnect;
}

export function ProfileConnectMiniCard({ connect }: Props) {
    return (
        <Link
            href={`/connects/${connect.id}` as any}
            className="group flex items-center gap-3 bg-azul-50 hover:bg-azul-100 border border-azul-200 hover:border-azul-400 rounded-xl p-3 transition-all duration-200"
        >
            {/* Miniatura */}
            <div className="relative size-14 rounded-lg overflow-hidden shrink-0 bg-azul-200">
                <Image
                    src={connect.image}
                    alt={connect.title}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-mirage-800 line-clamp-1 group-hover:text-azul-700 transition-colors">
                    {connect.title}
                </p>
                <div className="flex items-center gap-1 mt-1">
                    <CalendarDaysIcon className="w-3 h-3 text-naranja-500 shrink-0" />
                    <span className="text-xs text-mirage-500">{displayDate(connect.date)}</span>
                </div>
            </div>

            {/* Flecha */}
            <ArrowRightIcon className="w-4 h-4 text-azul-400 group-hover:text-azul-600 group-hover:translate-x-1 transition-all shrink-0" />
        </Link>
    );
}
