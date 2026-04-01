import { create } from "zustand";
import { SelectConnect } from "../types";

interface Store {
    open: boolean
    setOpen: (open: boolean) => void
    connect: SelectConnect | null
    setConnect: (connect: SelectConnect | null) => void
}

export const useCoreConnectStore = create<Store>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),

    connect: null,
    setConnect: (connect) => set({ connect }),
}))
