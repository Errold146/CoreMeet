import z from "zod";
import { tool } from "ai";
import { communityService } from "../../communities";

export const communityTools = {
    getRecommendedCommunities: tool({
        description: 'Recomienda CoreCommunities cuando el usuario busque o pregunte sobre un tema específico. Devuelve el nombre del creador.',
        inputSchema: z.object({
            query: z.string().describe('Tema de interés del usuario')
        }),
        execute: async ({ query }) => {
            const communities = await communityService.searchCommunityByTopicEnriched(query)
            return {
                communities,
                totalFound: communities.length
            }
        }
    }),
    getFeaturedCommunities: tool({
        description: 'Obtiene las comunidades más populares de CoreMeet ordenadas por número de miembros. Úsalo cuando el usuario pregunte por comunidades populares, destacadas o sin especificar un tema.',
        inputSchema: z.object({}),
        execute: async () => {
            const communities = await communityService.getFeatureCommunities()
            return { communities }
        }
    }),
};
