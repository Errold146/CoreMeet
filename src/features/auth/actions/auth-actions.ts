"use server"

import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUpAction(input: SignUpInput) {
    const data = SignUpSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: "Lo sentimos, ocurrio un error.",
            success: ""
        }
    }

    const res = await authService.register(data.data)
    return res
}
