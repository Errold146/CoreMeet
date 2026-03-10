"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms"

export function ForgotPasswordForm() {
    return (
        <Form>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                type="email"
                id="email"
                placeholder="Ingresa tu Email. Ejemplo: juan@perez.com"
            />

            <FormSubmit value={"Enviar Instrucciones"} />

        </Form>
    )
}
