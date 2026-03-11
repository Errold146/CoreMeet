import { auth } from "@/lib/auth";
import { SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";

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
            },
        });

        return {
            error: "",
            success: "Cuenta Creada Correctamente, revisa tu email.",
        };
    }
}

export const authService = new AuthService(authRepository);
