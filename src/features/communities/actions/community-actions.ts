"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";
import { communityService } from "../services/CommunityService";

export async function createCoreCommunityAction(input: CommunityInput) {

    const { session } = await requireAuth()
    if ( !session ) {
        return {
            error: 'Acceso denegado.',
            success: ''
        }
    }

    const data = CommunitySchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Lo sentimos, ocurrio un error inesperado.',
            success:''
        }
    }

    await communityService.createCoreCommunity(data.data, session.user.id)

    return {
        error: '',
        success: 'CoreCommunity Creada Correctamente.'
    }
}

export async function updateCoreCommunityAction(
    communityId: string,
    input: CommunityInput,
    previousImageUrl?: string
) {
    const { session } = await requireAuth()
    if (!session) {
        return {
            error: 'Acceso denegado.',
            success: ''
        }
    }

    const data = CommunitySchema.safeParse(input)
    if (!data.success) {
        return {
            error: 'Datos inválidos.',
            success: ''
        }
    }

    try {
        await communityService.updateCoreCommunity(
            communityId,
            data.data,
            session.user,
            previousImageUrl
        )

        return {
            error: '',
            success: 'CoreCommunity actualizada correctamente.'
        }

    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Error al actualizar la comunidad.',
            success: ''
        }
    }
}
