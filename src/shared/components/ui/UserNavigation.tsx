import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UserNavigation() {
    return (
        <nav className="flex justify-center items-center mt-5 md:mt-0">
            <Link
                href={'/dashboard'}
                className="w-fit flex items-center justify-center gap-2 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ArrowRightCircleIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                Panel de Administración
            </Link>
        </nav>
    )
}
