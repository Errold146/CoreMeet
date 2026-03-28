import z from "zod";

export const GeoCodeSchema = z.object({
    LongLabel: z.string(),
    City: z.string(),
    CntryName: z.string(),
    InputX: z.number(),
    InputY: z.number(),
})

const BaseSchema = z.object({
    title: z.string().min(1, { message: "El Titulo es requerido." }),
    details: z.string().min(50, { message: "Añade más detalles al Evento." }),
    image: z.url({ protocol: /^https?$/, hostname: z.regexes.domain, error: 'La imagen es requerida.' }),
    communityId: z.uuid({ message: "Elige Una CoreComunity." }),
    availableSeats: z.preprocess(Number, z.number().min(1, { error: 'El Cupo debe ser Mayor a 0.' })),
    date: z.iso.date({ message: "Añade una Fecha." }),
    time: z.string().min(1, { message: "La Hora es requerida." }),
    categoryId: z.uuid({ message: "Elige Una Categoría." }),
})

const ConnectLocationSchema = z.object({
    placeName: z.string().min(1, { message: "El Nombre del Lugar es requerido." }),
    address: z.string().min(1, { message: "La Dirección del Lugar es requerida." }),
    city: z.string().min(1, { message: "La ciudad es requerida." }),
    country: z.string().min(1, { message: "El país es requerido." }),
    lat: z.number({ error: 'Ubicación inválida.' }).min(-90, { error: 'Ubicación inválida.' }).max(90, { error: 'Ubicación inválida.' }),
    lng: z.number({ error: 'Ubicación inválida.' }).min(-90, { error: 'Ubicación inválida.' }).max(90, { error: 'Ubicación inválida.' })
})

const VirtualConnectSchema = BaseSchema.extend({
    virtual: z.literal(true),
    meetingUrl: z.string().url({ message: "Ingresa una URL válida para la reunión virtual." }).optional().or(z.literal('')),
})

const PhysicalConnectSchema = BaseSchema.extend({
    virtual: z.literal(false),
    location: ConnectLocationSchema,
})

export const ConnectSchema = z.discriminatedUnion("virtual", [
    VirtualConnectSchema,
    PhysicalConnectSchema,
])

export type ConnectInput = z.infer<typeof ConnectSchema>
