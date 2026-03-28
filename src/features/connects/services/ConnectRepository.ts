import { db } from "@/src/db"
import { InsertConnect } from "../types"
import { connect, connectLocations } from "@/src/db/schema"

export interface IConnectRepository {
    insert(data: InsertConnect): Promise<void>
}

class ConnectRepository implements IConnectRepository {
    async insert(data: InsertConnect): Promise<void> {
        const [ insertedConnect ] = await db.insert(connect).values(data).returning()
        if ( !insertedConnect.virtual && data.location ) {
            await db.insert(connectLocations).values({
                connectId: insertedConnect.id,
                ...data.location
            })
        }
    }
}

export const connectRepository = new ConnectRepository()
