"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { communityService } from "../services/CommunityService";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";
import { CheckPasswordInput, CheckPasswordSchema } from '../../auth/schemas/authSchema';

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

export async function deleteCoreCommunityAction(input: CheckPasswordInput, id: string) {

    const { session } = await requireAuth()
    if ( !session ) {
        return {
            error: 'Acceso denegado.',
            success: ''
        }
    }

    const data = CheckPasswordSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Datos inválidos.',
            success: ''
        }
    }

    const res = await communityService.deleteCoreCommunity(id, input.password, session.user)
    return res
}
