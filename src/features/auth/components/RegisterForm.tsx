"use client"

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpAction } from "../actions/auth-actions";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export function RegisterForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: 'all'
    })

    const onSubmit = async (data: SignUpInput) => {
        const {error, success} = await signUpAction(data)

        if (error) {
            toast.error(error)
        }

        if (success) {
            toast.success(success)
            reset()
        }

    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput
                type="text"
                id="name"
                placeholder="Ingresa tu nombre completo. Ejemplo: Juan Perez..."
                error={!!errors.name}
                {...register('name')}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                type="email"
                id="email"
                placeholder="Ingresa tu Email. Ejemplo: juan@perez.com"
                error={!!errors.email}
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput
                type="password"
                id="password"
                placeholder="Ingresa tu Contraseña. Ejemplo: Abc123..."
                error={!!errors.password}
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
            <FormInput
                type="password"
                id="password_confirmation"
                placeholder="Repite tu Contraseña. Ejemplo: Abc123..."
                error={!!errors.passwordConfirmation}
                {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

            <FormSubmit value={"Registrarme"} />
        </Form>
    )
}
