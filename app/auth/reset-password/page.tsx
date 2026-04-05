import Link from "next/link";
import { Suspense } from "react";
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
            <Suspense fallback={null}>
                <SetPasswordForm />
            </Suspense>

            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/login"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Iniciar Sesión</Link>
                <Link href={"/auth/register"} className="font-bold text-mirage-500 hover:text-mirage-600 hover:underline" target="_blank" rel="noopener noreferrer">Crear Cuenta</Link>
            </nav>
        </>
    )
}
