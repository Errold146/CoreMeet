"use server"

import { rateLimit } from "@/src/lib/limiter";
import { getClientIp } from "@/src/shared/utils/ip";
import { authService } from "../services/AuthService";
import { getMinutesDiffFromNow } from "@/src/shared/utils";
import { ForgotPasswordInput, ForgotPasswordSchema, SetPasswordInput, SetPasswordSchema, SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/authSchema";

async function checkRateLimit() {
    const ip = await getClientIp()
    const { success, reset } = await rateLimit.limit(ip)
    if ( !success ) {
        return {
            error: `Límite Alcanzado. Espera ${getMinutesDiffFromNow(reset)} minutos e intenta de nuevo.`,
            success: ''
        }
    }
    return null
}

export async function signUpAction(input: SignUpInput) {

    const limited = await checkRateLimit()
    if ( limited ) return limited

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

    const limited = await checkRateLimit()
    if ( limited ) return limited

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

    const limited = await checkRateLimit()
    if ( limited ) return limited

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
