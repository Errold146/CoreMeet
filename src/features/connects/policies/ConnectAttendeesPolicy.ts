import { User } from "better-auth";
import { SelectConnect } from "../types";
import { ConnectPolicy } from "./ConnectPolicy";

export class ConnectAttendeePolicy {
    /**
     * Puede confirmar asistencia
    */
    static canConfirm(user: User, connect: SelectConnect, isAttending: boolean, attendanceCount: number): boolean {
        /**
         * No puede confirmar si:
         * El evento ya pasó
         * Es el admin/owner
         * Ya está asistiendo
         * No hay cupos disponibles
        */
        if ( ConnectPolicy.isPastConnect(connect) ) return false;
        if (ConnectPolicy.isAdmin(user, connect)) return false;
        if (isAttending) return false;
        if (attendanceCount >= connect.availableSeats) return false;

        return true;
    }

    /**
     * Puede cancelar asistencia
    */
    static canCancel(user: User, connect: SelectConnect, isAttending: boolean): boolean {
        /**
         * No puede cancelar si:
         * El evento ya pasó
         * Es el admin/owner
         * No está asistiendo
        */
        if ( ConnectPolicy.isPastConnect(connect) ) return false;
        if (ConnectPolicy.isAdmin(user, connect)) return false;
        if (!isAttending) return false;

        return true;
    }
}
