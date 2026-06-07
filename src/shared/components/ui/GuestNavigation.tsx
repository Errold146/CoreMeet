import Link from "next/link";
import { IALink } from "./IALink";

export function GuestNavigation() {
    return (
        <nav className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mt-4 md:mt-0 pb-1 md:pb-0">

            <IALink />

            <div className="flex items-center gap-3 w-full md:w-auto max-w-sm md:max-w-none">
                <Link
                    className="flex-1 md:flex-none text-center px-4 md:px-8 py-2.5 md:py-3 text-sm font-semibold text-naranja-600 bg-naranja-50 border-2 border-naranja-400 rounded-xl shadow-md hover:shadow-lg hover:bg-naranja-200 hover:text-naranja-700 transition-all duration-200 ease-in-out"
                    href="/auth/login"
                >
                    Iniciar Sesión
                </Link>
                <Link
                    className="flex-1 md:flex-none text-center px-4 md:px-8 py-2.5 md:py-3 text-sm font-semibold text-naranja-600 bg-naranja-50 border-2 border-naranja-400 rounded-xl shadow-md hover:shadow-lg hover:bg-naranja-200 hover:text-naranja-700 transition-all duration-200 ease-in-out"
                    href="/auth/register"
                >
                    Registrarse
                </Link>
            </div>
        </nav>
    )
}
