"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { ConnectInput, ConnectSchema } from "../schemas/connectSchema";
import { connectService } from "../services/ConnectSevice";
import { CheckPasswordInput, CheckPasswordSchema } from "../../auth/schemas/authSchema";

export async function createConnectAction(input: ConnectInput) {

    const { session } = await requireAuth()
    if ( !session ) {
        return {
            error: 'Acceso Denegado.',
            success: ''
        }
    }

    const data = ConnectSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Lo sentimos, ocurrio un error, intentalo de nuevo.',
            success: ''
        }
    }

    await connectService.createConnect(data.data, session.user)

    return {
        error: '',
        success: 'CoreConnect creado correctamente.'
    }
}

export async function updateConnectAction(connectId: string, input: ConnectInput) {

    const { session } = await requireAuth()
    if ( !session ) {
        return {
            error: 'Acceso Denegado.',
            success: ''
        }
    }

    const data = ConnectSchema.safeParse(input)
    if ( !data.success ) {
        return {
            error: 'Datos inválidos, revisa el formulario.',
            success: ''
        }
    }

    try {
        await connectService.updateConnect(connectId, data.data, session.user)

        return {
            error: '',
            success: 'CoreConnect actualizado correctamente.'
        }

    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Error al actualizar el CoreConnect.',
            success: ''
        }
    }
}

export async function deleteConnectAction(input: CheckPasswordInput, connectId: string) {
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

    try {
        return await connectService.deleteConnect(connectId, input.password, session.user)
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Error al eliminar el CoreConnect.',
            success: ''
        }
    }
}
