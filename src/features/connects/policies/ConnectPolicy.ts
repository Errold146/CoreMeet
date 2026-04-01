import { User } from "better-auth";
import { SelectConnect } from "../types";

export class ConnectPolicy {
    static isAdmin(user: User, connect: SelectConnect): boolean {
        const createdById = typeof connect.createdBy === 'object' && connect.createdBy !== null
            ? (connect.createdBy as User).id
            : connect.createdBy as string;
        return user.id === createdById;
    }

    static canViewAttendes(user: User, connect: SelectConnect): boolean {
        return this.isAdmin(user, connect);
    }

    static canEdit(user: User, connect: SelectConnect): boolean {
        return this.isAdmin(user, connect);
    }

    static canDelete(user: User, connect: SelectConnect): boolean {
        return this.isAdmin(user, connect);
    }

    static isPastConnect(connect: SelectConnect): boolean {
        const now = new Date()
        const connectDateTime = new Date(`${connect.date}T${connect.time}`)
        return connectDateTime < now
    }
}
