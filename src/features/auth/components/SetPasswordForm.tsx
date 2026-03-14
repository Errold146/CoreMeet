"use client"

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setPasswordAction } from "../actions/auth-actions";
import { redirect, useSearchParams } from "next/navigation";
import { SetPasswordInput, SetPasswordSchema } from "../schemas/authSchema";
import { Form, FormInput, FormLabel, FormSubmit, FormError } from "@/src/shared/components/forms";

export function SetPasswordForm() {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    if ( !token ) {
        toast.error("El Token ya expiró, solicita un nuevo email.")
        redirect('/auth/forgot-password')
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SetPasswordSchema),
        mode: 'all'
    })

    const onSubmit = async (data: SetPasswordInput) => {
        const { error, success } = await setPasswordAction(data, token)

        if ( error ) toast.error(error);

        if ( success ) {
            toast.success(success)
            redirect('/auth/login')
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="newPassword">Nueva Contraseña</FormLabel>
            <FormInput
                type="password"
                id="newPassword"
                placeholder="Ingresa la Nueva Contraseña, Ejemplo: Abc123..."
                error={!!errors.newPassword}
                {...register('newPassword')}
            />
            {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}

            <FormLabel htmlFor="passordConfirmation">Repetir Contraseña</FormLabel>
            <FormInput
                type="password"
                id="passordConfirmation"
                placeholder="Repetir Contraseña, Ejemplo: Abc123..."
                error={!!errors.passwordConfirmation}
                {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

            <FormSubmit
                value={'Actualizar Contraseña'}
            />
        </Form>
    )
}
