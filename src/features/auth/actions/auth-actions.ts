"use server"

import { authService } from "../services/AuthService";
import { ForgotPasswordInput, ForgotPasswordSchema, SetPasswordInput, SetPasswordSchema, SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/authSchema";

export async function signUpAction(input: SignUpInput) {
    const data = SignUpSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: "Lo sentimos, ocurrio un error inesperado.",
            success: ""
        }
    }

    const res = await authService.register(data.data)
    return res
}

export async function signInAction(input: SignInInput) {
    const data = SignInSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: "Lo sentimos, ocurrio un error inesperado.",
            success: ''
        }
    }

    const res = await authService.login(input)
    return res
}

export async function forgotPasswordAction(input: ForgotPasswordInput) {
    const data = ForgotPasswordSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Lo sentimos, ocurrio un error inesperado.',
            success: ''
        }
    }

    const res = await authService.forgotPassword(data.data)
    return res
}

export async function setPasswordAction(input: SetPasswordInput, token: string) {
    const data = SetPasswordSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Lo sentimos, ocurrio un error inesperado.',
            success: ''
        }
    }

    const res = await authService.confirmPassword(data.data, token)
    return res
}
