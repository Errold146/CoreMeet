import { tool } from "ai";
import z from "zod";
import { categoryService } from "../../connects/services/CategoryService";

export const categoryTools = {
    getCategories: tool({
        description: 'Obtiene todas las categorías disponibles en CoreMeet. Úsalo cuando el usuario pregunte qué tipos de eventos o categorías existen',
        inputSchema: z.object({}),
        execute: async () => {
            const categories = await categoryService.getAllCategories()
            return { categories }
        }
    }),
};
