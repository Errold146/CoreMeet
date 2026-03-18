import z from "zod";

export const CommunitySchema = z.object({
    name: z.string().min(3, { message: "El Titulo de CoreCommunity es requerido." }),
    imageUrl: z.url({ message: "Debes subir una imagen para la CoreCommunity." }),
    description: z.string().min(10, { message: "La Descripción es requerida." }),
});

export type CommunityInput = z.infer<typeof CommunitySchema>;
