import { z } from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: "El nombre es requerido."}),
    email: z.email({error: "Email Inválido."}),
    password: z.string().trim().min(8, { error: "La contraseña es mínimo de 8 caracteres."}),
    passwordConfirmation: z.string().trim().min(1, {error: "La confirmación de la contraseña es requerida."}),
    newPassword: z.string().trim().min(8, { error: "La contraseña es mínimo de 8 caracteres."}),
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

export const SignInSchema = BaseAuthSchema.pick({
    email: true
}).extend({
    password: z.string().trim().min(1, {error: "El password es requerido."})
})

export const ForgotPasswordSchema = BaseAuthSchema.pick({
    email: true
})

export const SetPasswordSchema = BaseAuthSchema.pick({
    newPassword: true,
    passwordConfirmation: true
}).refine(data => data.newPassword === data.passwordConfirmation, {
    error: "Las contraseñas no son iguales.",
    path: ['passwordConfirmation']
})

export const CheckPasswordSchema = z.object({
    password: z.string().min(1, {error: 'El Password es requerido.'})
})

export type SignUpInput = z.infer<typeof SignUpSchema>
export type SignInInput = z.infer<typeof SignInSchema>
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>
export type SetPasswordInput = z.infer<typeof SetPasswordSchema>
export type CheckPasswordInput = z.infer<typeof CheckPasswordSchema>
