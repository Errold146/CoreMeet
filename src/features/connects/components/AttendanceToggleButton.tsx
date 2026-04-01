"use client";

import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

import { ConnectPermissions } from "../types";
import { toggleAttendanceAction } from "../actions/attendance-action";
import { toast } from "sonner";

type Props = {
    connectId: string
    permissions: ConnectPermissions
}

export function AttendanceToggleButton({ connectId, permissions }: Props) {

    const [canConfirm, setCanConfirm] = useState(permissions.canConfirm)

    const handleClick = async () => {
        const res = await toggleAttendanceAction(connectId, canConfirm)

        if ( res?.error ) toast.error(res.error);

        if ( res?.success ) {
            toast.success(res.success)
            setCanConfirm(res.newPermissions.canConfirm)
        }
    }

    return (
        <button
            className={`w-full sm:w-fit flex items-center justify-center gap-2 transition-color duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2 px-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
                canConfirm
                    ? "bg-azul-100 text-azul-700 hover:bg-azul-600 hover:text-white border border-azul-400 hover:border-azul-700"
                    : "bg-naranja-100 text-naranja-700 hover:bg-naranja-500 hover:text-white border border-naranja-400 hover:border-naranja-700"
            }`}
            onClick={handleClick}
        >
            {canConfirm
                ? <CheckCircleIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                : <XCircleIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            }
            {canConfirm ? "Confirmar Asistencia" : "Cancelar Asistencia"}
        </button>
    );
}
