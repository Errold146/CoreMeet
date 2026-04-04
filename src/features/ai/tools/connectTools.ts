import z from "zod";
import { tool } from "ai";
import { connectService } from "../../connects/services/ConnectSevice";

export const connectTools = {
    getRecommendedConnects: tool({
        description: 'Recomienda CoreConnects (eventos) próximos cuando el usuario busque o pregunte sobre un tema, actividad o tipo de evento específico. Incluye nombre de categoría y comunidad.',
        inputSchema: z.object({
            query: z.string().describe('Tema, actividad o tipo de evento de interés del usuario')
        }),
        execute: async ({ query }) => {
            const connects = await connectService.searchByTopicEnriched(query)
            return {
                connects,
                totalFound: connects.length
            }
        }
    }),
    getUpcomingConnects: tool({
        description: 'Obtiene los próximos CoreConnects (eventos) sin filtro de tema. Úsalo cuando el usuario pregunte qué eventos hay próximamente sin especificar un tema.',
        inputSchema: z.object({
            limit: z.number().int().min(1).max(10).optional().describe('Número máximo de eventos a devolver (por defecto 5)')
        }),
        execute: async ({ limit }) => {
            const connects = await connectService.getUpcomingEnriched(limit)
            return {
                connects,
                totalFound: connects.length
            }
        }
    }),
    getConnectsByCategory: tool({
        description: 'Busca CoreConnects (eventos) próximos filtrados por una categoría específica. Úsalo cuando el usuario mencione explícitamente el nombre de una categoría (ej: "tecnología", "música", "deportes").',
        inputSchema: z.object({
            categoryName: z.string().describe('Nombre de la categoría tal como lo mencionó el usuario')
        }),
        execute: async ({ categoryName }) => {
            const connects = await connectService.getConnectsByCategoryName(categoryName)
            return {
                connects,
                totalFound: connects.length,
                searchedCategory: categoryName
            }
        }
    }),
    getConnectsByLocation: tool({
        description: 'Busca CoreConnects (eventos) próximos que se realizan en una ciudad o país específico. Úsalo cuando el usuario mencione una ciudad (ej: "Bogotá", "Madrid", "Buenos Aires") o un país (ej: "Colombia", "España", "México").',
        inputSchema: z.object({
            location: z.string().describe('Ciudad o país mencionado por el usuario, tal como lo escribió')
        }),
        execute: async ({ location }) => {
            const connects = await connectService.getConnectsByLocation(location)
            return {
                connects,
                totalFound: connects.length,
                searchedLocation: location
            }
        }
    }),
    getConnectsByDate: tool({
        description: 'Busca CoreConnects (eventos) que ocurren en una fecha específica o dentro de un rango de fechas. Úsalo cuando el usuario mencione "hoy", "mañana", "esta semana", "el próximo lunes", una fecha concreta (ej: "20 de mayo de 2026") o un rango (ej: "entre el 1 y el 10 de junio"). IMPORTANTE: Convierte siempre las fechas relativas a formato YYYY-MM-DD usando la fecha actual que se te provee en el sistema antes de llamar esta herramienta.',
        inputSchema: z.object({
            startDate: z.string().describe('Fecha de inicio en formato YYYY-MM-DD'),
            endDate: z.string().describe('Fecha de fin en formato YYYY-MM-DD. Si es un solo día, debe ser igual a startDate'),
            label: z.string().optional().describe('Descripción legible del período buscado (ej: "hoy", "esta semana", "20 de mayo de 2026")')
        }),
        execute: async ({ startDate, endDate, label }) => {
            const connects = await connectService.getConnectsByDateRange(startDate, endDate)
            return {
                connects,
                totalFound: connects.length,
                startDate,
                endDate,
                label: label ?? `${startDate} al ${endDate}`
            }
        }
    }),
};
