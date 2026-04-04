import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function IALink() {
    return (
        <Link
            href={'/ai'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r from-azul-600 to-mirage-500 text-white text-sm font-semibold shadow-md shadow-azul-600/30 hover:shadow-azul-600/50 hover:scale-105 transition-all duration-200 group"
        >
            <SparklesIcon className="w-4 h-4 text-naranja-300 group-hover:rotate-12 transition-transform duration-200" />
            Asistente{' '}
            <span className="font-black tracking-wide">IA</span>
        </Link>
    )
}
