import { User } from "better-auth";
import { SelectCoreCommunity } from "../types/community.types";

export class MembershipPolicy {
    static canJoin(user: User, community: SelectCoreCommunity, isMember: boolean): boolean {

        // Si ya es miembro, no se puede volver a unir
        if ( isMember ) return false;

        // El admin no se puede unir, ya esta unido por default
        if ( community.createdBy === user.id ) return false;

        return true
    }

    static canLeave(user: User, community: SelectCoreCommunity, isMember: boolean): boolean {

        // El admin no puede abandonar su propia comunidad
        if ( community.createdBy === user.id ) return false;

        return isMember
    }
}
