import Link from "next/link";
import { Metadata } from "next";

import { Heading } from "@/components/typography";
import { SetPasswordForm } from "@/src/features/auth";
import { generatePageTitle } from "@/src/shared/utils";

export const metadata: Metadata = {
    title: generatePageTitle("Actualizar Password"),
    description: "Recupera tu acceso a CoreMeet"
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Heading>Actualizar Contraseña</Heading>
            <SetPasswordForm />

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Iniciar Sesión</Link>
                <Link href={"/auth/register"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline">Crear Cuenta</Link>
            </nav>
        </>
    )
}
