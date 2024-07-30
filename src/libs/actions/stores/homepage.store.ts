import { AttributesHomepage } from "@/libs/types/homepage.type";
import { create } from "zustand";

type StateStore = {
    data?: AttributesHomepage | null
}
 
type ActionStore = {
    setState: (data: AttributesHomepage) => void;
};

export const useHomepageStore = create<StateStore & ActionStore>((set) => ({
    data: null,
    setState: (data) => set({ data }), 
}))