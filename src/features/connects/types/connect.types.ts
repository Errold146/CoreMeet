import { category, connect, connectLocations } from "@/src/db/schema";

export type SelectCategory = typeof category.$inferSelect

export type InsertBasicConnect = typeof connect.$inferInsert
export type InsertConnectLocation = typeof connectLocations.$inferInsert

export type SelectBasicConnect = typeof connect.$inferSelect
export type SelectConnectLocation = typeof connectLocations.$inferSelect

export type InsertConnect = InsertBasicConnect & {
    location?: Omit<InsertConnectLocation, 'connectId' | 'id'>
}
