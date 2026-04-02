"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { profileService } from "../services/ProfileService";
import { ProfileInput, ProfileSchema } from "../schemas/profileSchema";

export async function updateProfileAction(input: ProfileInput) {
    const { session } = await requireAuth()
    if ( !session ) {
        return {
            error: 'Acceso Denegado.',
            success: ''
        }
    }

    const { data, success } = ProfileSchema.safeParse(input)
    if ( !success ) {
        return {
            error: 'Lo sentimos ocurrio un error, recarga e intenta de nuevo.',
            success: ''
        }
    }

    await profileService.updateProfile(data)

    return {
        error: '',
        success: 'Perfil Actualizado Correctamente.'
    }
}
