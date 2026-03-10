"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms"

export function LoginForm() {
    return (
        <Form>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Ingresa tu Email. Ejemplo: email@email.com"
            />

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Ingresa tu Contraseña. Ejemplo: Abc123..."
            />

            <FormSubmit value={"Iniciar Sesión"} />
        </Form>
    )
}
