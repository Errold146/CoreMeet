import { Metadata } from "next";

import { Heading } from "@/components/typography";
import { generatePageTitle } from "@/src/shared/utils";
import { ForgotPasswordForm } from "@/src/features/auth";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle("Recuperar Password"),
    description: "Recupera tu acceso a CoreMeet"
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Heading>Recupera tu acceso a CoreMeet</Heading>
            <ForgotPasswordForm />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Iniciar Sesión</Link>
                <Link href={"/auth/register"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Crear Cuenta</Link>
            </nav>
        </>
    )
}
