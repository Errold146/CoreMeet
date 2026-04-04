import { communityTools } from "./communityTools";
import { connectTools } from "./connectTools";
import { categoryTools } from "./categoryTools";

export const tools = {
    ...communityTools,
    ...connectTools,
    ...categoryTools,
} as const
