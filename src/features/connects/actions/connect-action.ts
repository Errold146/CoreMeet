"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { ConnectInput, ConnectSchema } from "../schemas/connectSchema";
import { connectService } from "../services/ConnectSevice";

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
