import { User } from "better-auth";
import { SelectCoreCommunity } from "../../communities";
import { category, connect, connectLocations, connectAttendees } from "@/src/db/schema";

export type SelectCategory = typeof category.$inferSelect

export type InsertBasicConnect = typeof connect.$inferInsert
export type InsertConnectLocation = typeof connectLocations.$inferInsert

export type SelectBasicConnect = typeof connect.$inferSelect
export type SelectConnectLocation = typeof connectLocations.$inferSelect

export type InsertConnect = InsertBasicConnect & {
    location?: Omit<InsertConnectLocation, 'connectId' | 'id'>
}

export type SelectConnect = SelectBasicConnect & {
    location?: SelectConnectLocation | null
}

export type ConnectWithPermissions = {
    data: SelectConnect
    attendanceCount: number
    context: {
        isAdmin: boolean
    }
    permissions: {
        canViewAttendes: boolean
        canEdit: boolean
        canDelete: boolean
    }
}

export type FullConnect = SelectBasicConnect & {
    location?: SelectConnectLocation | null
    category: SelectCategory
    community: SelectCoreCommunity
    createdBy: User
}

export type ConnectPermissions = {
    canConfirm: boolean
    canCancel: boolean
}

export type SelectConnectAttendee = typeof connectAttendees.$inferSelect
export type SelectConnectAttendeeWithUser = SelectConnectAttendee & {
    user: {
        id: User['id']
        name: User['name'],
        email: User['email']
    }
}
