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
};
