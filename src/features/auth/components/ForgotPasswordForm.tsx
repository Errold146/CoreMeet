"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordInput, ForgotPasswordSchema } from "../schemas/authSchema";
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms";
import { forgotPasswordAction } from "../actions/auth-actions";
import { toast } from "sonner";

export function ForgotPasswordForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ForgotPasswordSchema)
    })

    const onSubmit = async (data: ForgotPasswordInput) => {
        const { error, success } = await forgotPasswordAction(data)

        if ( error ) {
            toast.error(error)
        }

        if ( success ) {
            toast.success(success)
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                type="email"
                id="email"
                placeholder="Ingresa tu Email. Ejemplo: juan@perez.com"
                error={!!errors.email}
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormSubmit value={"Enviar Instrucciones"} />

        </Form>
    )
}
