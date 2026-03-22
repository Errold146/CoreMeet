import { create } from "zustand";
import { SelectCoreCommunity } from "../types/community.types";

interface Store {
    open: boolean
    setOpen: (open: boolean) => void
    community: SelectCoreCommunity | null
    setCommunity: (community: SelectCoreCommunity | null) => void
}

export const useCoreCommunityStore = create<Store>((set) => ({
    open: false,
    setOpen: (open) => {
        set({open})
    },

    community: null,
    setCommunity: (community) => {
        set({community})
    }
}))
