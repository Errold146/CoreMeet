import z from "zod";

export const ProfileSchema = z.object({
    name: z.string().min(3, { error: "Tu nombre es Requerido." }),
    bio: z.string().min(1, { error: "Añade una descripción o biografía." }),
    image: z.url({
        protocol: /^https?$/,
        hostname: z.regexes.domain,
        error: "La URL de la imagen no es válida.",
    }).or(z.literal('')).nullable().optional(),
});

export type ProfileInput = z.infer<typeof ProfileSchema>;
