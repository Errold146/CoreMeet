"use client"

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Heading } from "@/src/shared/components/typography";
import { changePasswordAction } from "../actions/auth-actions";
import { ChangePasswordInput, ChangePasswordSchema } from '../schemas/authSchema';
import { Form, FormError, FormLabel, FormInput, FormSubmit, FormToggle } from "@/src/shared/components/forms";

export function ChangePasswordForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(ChangePasswordSchema),
        mode: 'all'
    })

    const onSubmit = async (data: ChangePasswordInput) => {
        const { error, success, redirectToLogin } = await changePasswordAction(data)

        if ( error ) toast.error(error);
        if ( success ) {
            toast.success(success)
            reset()
            redirect(redirectToLogin ? '/auth/login' : '/dashboard')
        }
    }

    return (
        <>
            <Heading level={3} className="mt-10 text-center">
                Cambiar Contraseña
            </Heading>

            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormLabel htmlFor="currentPassword">Contraseña Actual</FormLabel>
                <FormInput
                    id="currentPassword"
                    type="password"
                    placeholder="Escribe tu Password Actual"
                    error={!!errors.currentPassword}
                    {...register('currentPassword')}
                />
                {errors.currentPassword && <FormError>{errors.currentPassword.message}</FormError>}

                <FormLabel htmlFor="newPassword">Nueva Contraseña</FormLabel>
                <FormInput
                    id="newPassword"
                    type="password"
                    placeholder="Nuevo Password"
                    error={!!errors.newPassword}
                    {...register('newPassword')}
                />
                {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}

                <FormLabel htmlFor="passwordConfirmation">Repetir Nueva Contraseña</FormLabel>
                <FormInput
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Repite el Nuevo Password"
                    error={!!errors.passwordConfirmation}
                    {...register('passwordConfirmation')}
                />
                {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

                <div className="flex items-center justify-between rounded-xl border-2 border-mirage-200 bg-mirage-50 px-4 py-3 transition-colors duration-200 hover:border-naranja-300 hover:bg-naranja-50">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-mirage-950">
                            Cerrar sesión en todos los dispositivos
                        </span>
                        <span className="text-xs text-mirage-400">
                            Revoca el acceso en todos tus dispositivos activos
                        </span>
                    </div>
                    <FormToggle id="revokeOtherSessions"  {...register('revokeOtherSessions')} />
                </div>

                <FormSubmit value="Cambiar Contraseña" />
            </Form>
        </>
    );
}
