"use client"

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInAction } from "../actions/auth-actions";
import { SignInInput, SignInSchema } from '../schemas/authSchema';
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms";
import { redirect } from "next/navigation";

export function LoginForm() {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(SignInSchema),
        mode: 'all'
    })

    const onSubmit = async (data: SignInInput) => {
        const { success, error } = await signInAction(data)

        if ( error ) {
            toast.error(error)
        }

        if ( success ) {
            toast.success(success)
            redirect('/dashboard')
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Ingresa tu Email. Ejemplo: email@email.com"
                error={!!errors.email}
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Ingresa tu Contraseña. Ejemplo: Abc123..."
                error={!!errors.password}
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormSubmit value={"Iniciar Sesión"} />
        </Form>
    )
}
