import { z } from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: "El nombre es requerido."}),
    email: z.email({error: "Email Inválido."}),
    password: z.string().trim().min(8, { error: "La contraseña es mínimo de 8 caracteres."}),
    passwordConfirmation: z.string().trim().min(1, {error: "La confirmación de la contraseña es requerida."})
})

export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true,
}).refine(data => data.password === data.passwordConfirmation, {
    error: "Las contraseñas no son iguales.",
    path: ['passwordConfirmation']
})

export type SignUpInput = z.infer<typeof SignUpSchema>
