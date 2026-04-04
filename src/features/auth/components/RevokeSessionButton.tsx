"use client"

import { toast } from "sonner";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

import { revokeSessionAction } from "../actions/auth-actions";

interface Props {
    token: string;
}

export function RevokeSessionButton({ token }: Props) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleRevoke = () => {
        startTransition(async () => {
            const { error, success } = await revokeSessionAction(token);
            if (error) {
                toast.error(error);
                return;
            }
            toast.success(success);
            router.refresh();
        });
    };

    return (
        <button
            onClick={handleRevoke}
            disabled={isPending}
            className="shrink-0 flex items-center gap-1.5 rounded-xl border-2 border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 shadow-sm transition-all duration-200 hover:border-red-400 hover:bg-red-100 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
            <ArrowRightStartOnRectangleIcon className="size-4" />
            {isPending ? "Cerrando..." : "Cerrar sesión"}
        </button>
    );
}

