import Link from "next/link";
import { IALink } from "./IALink";

export function GuestNavigation() {
    return (
        <nav className="flex justify-center items-center gap-6 mt-5 md:mt-0">

            <IALink />

            <Link
                className="px-8 py-3 font-semibold text-naranja-600 bg-naranja-50 border-2 border-naranja-400 rounded-xl shadow-md hover:shadow-lg hover:bg-naranja-200 hover:text-naranja-700 transition-all duration-200 ease-in-out cursor-pointer"
                href="/auth/login"
            >
                Iniciar Sesión
            </Link>
            <Link
                className="px-8 py-3 font-semibold text-naranja-600 bg-naranja-50 border-2 border-naranja-400 rounded-xl shadow-md hover:shadow-lg hover:bg-naranja-200 hover:text-naranja-700 transition-all duration-200 ease-in-out cursor-pointer"
                href="/auth/register"
            >
                Registrarse
            </Link>
        </nav>
    )
}
