import { headers } from "next/headers";
import { APIError } from "better-auth";

import { auth } from "@/lib/auth";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { ForgotPasswordInput, SetPasswordInput, SignInInput, SignUpInput } from "../schemas/authSchema";

class AuthService {

    constructor(
        private authRepository: IAuthRepository
    ){}

    async register(credentials: SignUpInput) {
        const { name, email, password } = credentials;

        // Revisar si el usuario existe
        const user = await this.authRepository.userExists(email)
        if ( user ) {
            return {
                error: 'El Email ya está registrado.',
                success: ''
            }
        }

        // Manejar el registro
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                callbackURL: '/dashboard'
            },
            headers: await headers()
        });

        return {
            error: "",
            success: "Cuenta Creada Correctamente, revisa tu email.",
        };
    }

    async login(credentiales: SignInInput) {
        const { email, password } = credentiales

        // Revisar si el usuario existe
        const user = await this.authRepository.userExists(email)
        if ( !user ) {
            return {
                error: 'El Usuario no existe.',
                success: ''
            }
        }

        // Verificar el password y si confirmo su cuenta
        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: '/dashboard'
                },
                headers: await headers()
            })

            return {
                error: '',
                success: 'Sesión Iniciada Correctamente.'
            }

        } catch (error) {
            if ( error instanceof APIError ) {
                const msg: Record<number, string> = {
                    401: 'Password Incorrecto.',
                    403: 'Cuenta no confirmada, revisa tu email.'
                }

                const errorMsg = msg[error.statusCode]
                if ( errorMsg ) {
                    return {
                        error: errorMsg,
                        success: ''
                    }
                }
            }
        }

        return {
            error: '',
            success: ''
        }
    }

    async forgotPassword(input: ForgotPasswordInput) {
        const user = await this.authRepository.userExists(input.email)
        if ( !user ) {
            return {
                error: 'Usuario Inválido, te invitamos a crear una cuenta.',
                success: ''
            }
        }

        await auth.api.requestPasswordReset({
            body: {
                email: input.email
            }
        })

        return {
            error: '',
            success: 'Revisa las instrucciones en tu email.'
        }
    }

    async confirmPassword(input: SetPasswordInput, token: string) {

        const { newPassword } = input

        try {
            await auth.api.resetPassword({
                body: {
                    newPassword,
                    token
                }
            })

            return {
                error: '',
                success: 'Contraseña Actualizada Correctamente.'
            }

        } catch (error) {
            if ( error instanceof APIError ) {
                return {
                    error: 'Token Inválido.',
                    success: ''
                }
            }
        }

        return {
            error: '',
            success: ''
        }
    }
}

export const authService = new AuthService(authRepository);
