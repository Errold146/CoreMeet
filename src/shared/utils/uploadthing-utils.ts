import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

/**
 * Elimina un archivo de UploadThing usando su URL
 * @param fileUrl URL completa del archivo (ejemplo: https://utfs.io/f/abc123.png)
 * @returns Promise que resuelve cuando el archivo es eliminado
*/

export async function deleteFileFromUploadThing(fileUrl: string): Promise<void> {
    try {
        // Extraer la key del archivo desde la URL
        const fileKey = fileUrl.split('/f/')[1];

        if (!fileKey) {
            throw new Error('URL del archivo inválida');
        }

        // Eliminar el archivo de UploadThing
        await utapi.deleteFiles(fileKey);

    } catch (error) {
        console.error('Error al eliminar archivo de UploadThing:', error);
        throw error;
    }
}
