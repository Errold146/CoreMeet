import { NextRequest } from "next/server";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { UIMessage, convertToModelMessages, streamText, stepCountIs } from "ai";

import { tools } from "@/src/features/ai/tools";

export async function POST(req: NextRequest) {
    const { messages }: {messages: UIMessage[]} = await req.json()

    const openRouter = createOpenRouter({
        apiKey: process.env.OPEN_ROUTER_KEY
    })

    const today = new Date().toISOString().split('T')[0]

    const res = streamText({
        messages: await convertToModelMessages(messages),
        system: `Eres un asistente de CoreMeet AI. Ayudas a encontrar CoreCommunities (comunidades), CoreConnects (eventos) y categorías.

FECHA ACTUAL: ${today} (YYYY-MM-DD). Úsala para resolver referencias de fechas relativas antes de llamar herramientas.

REGLA PRINCIPAL: Siempre usa las herramientas disponibles para obtener datos, incluso en preguntas de seguimiento. Nunca respondas sobre eventos o comunidades sin llamar primero a la herramienta correspondiente, aunque el tema ya haya aparecido antes en la conversación. Las herramientas son la única fuente de verdad.

Reglas para usar las herramientas:
- Si el usuario menciona una fecha o período de tiempo (ej: "hoy", "mañana", "esta semana", "el 20 de mayo", "dentro de una semana", "el próximo viernes"), USA getConnectsByDate. Convierte la referencia a fechas YYYY-MM-DD usando la FECHA ACTUAL antes de llamar la herramienta.
- Si el usuario menciona una ciudad o país (ej: "Bogotá", "Madrid", "Colombia", "España", "México"), USA getConnectsByLocation con ese lugar.
- Si el usuario menciona el nombre de una categoría específica (ej: tecnología, música, deportes), USA getConnectsByCategory con ese nombre.
- Si el usuario busca eventos por tema general o palabras clave, usa getRecommendedConnects.
- Si el usuario pregunta qué eventos hay próximamente sin especificar tema ni categoría ni lugar ni fecha, usa getUpcomingConnects.
- Si el usuario pregunta qué categorías existen, usa getCategories PRIMERO, luego si pide una específica usa getConnectsByCategory.
- Para comunidades por tema usa getRecommendedCommunities; para las más populares usa getFeaturedCommunities.
- Si el usuario menciona un evento o comunidad anterior y quiere más detalles, regístrarse, o cualquier acción sobre él, vuelve a llamar la herramienta apropiada con el mismo contexto de búsqueda para que los resultados se muestren visualmente.

Siempre responde en español y sintetiza los resultados de las herramientas en lenguaje natural.`,
        model: openRouter('stepfun/step-3.5-flash:free'),
        tools,
        stopWhen: stepCountIs(3),
    })

    return res.toUIMessageStreamResponse()
}
