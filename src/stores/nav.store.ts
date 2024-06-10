import { Fetch } from "@/services/fetch.service";
import { DataLocalizationType } from "@/types/nav.type";
import { create } from "zustand";

type StateStore = {
    state?: DataLocalizationType | null
}

type ActionStore = {
    setState: (locale?: string) => void;
};

export const useNavStore = create<StateStore & ActionStore>((set) => ({
    state: null,
    setState: async (locale?: string) => {
        const data: DataLocalizationType = await Fetch.get(`/api/navigation?populate=*&locale=${locale ?? "id"}`, { cache: "default" });
        
        return set({ state: data })
    }, 
}))