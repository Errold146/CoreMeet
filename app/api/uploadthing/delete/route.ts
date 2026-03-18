import { requireAuth } from "@/lib/auth-server";
import { UTApi } from "uploadthing/server";
import { NextRequest, NextResponse } from "next/server";

const utapi = new UTApi();

export async function POST(request: NextRequest) {
    try {
        // Verificar autenticación
        const { session } = await requireAuth();
        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            );
        }

        const { fileUrl } = await request.json();

        if (!fileUrl) {
            return NextResponse.json(
                { error: "URL del archivo es requerida" },
                { status: 400 }
            );
        }

        // Extraer la key del archivo desde la URL
        // URL ejemplo: https://utfs.io/f/abc123.png
        const fileKey = fileUrl.split('/f/')[1];

        if (!fileKey) {
            return NextResponse.json(
                { error: "URL del archivo inválida" },
                { status: 400 }
            );
        }

        // Eliminar el archivo de UploadThing
        await utapi.deleteFiles(fileKey);

        return NextResponse.json(
            { success: true, message: "Archivo eliminado correctamente" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error al eliminar archivo:", error);
        return NextResponse.json(
            { error: "Error al eliminar el archivo" },
            { status: 500 }
        );
    }
}
