import StorageUtil from "@/libs/helpers/storage.helper";
import { AttributesHomepage } from "@/libs/types/homepage.type";
import { create } from "zustand";

type StateStore = {
    data?: Record<string, any> | null
}
 
type ActionStore = {
    setState: (data: Record<string, any>) => void;
};

export const useAuthStore = create<StateStore & ActionStore>((set) => ({
    data: StorageUtil.getItem({ key: 'crd', type: 'cookie' }) ? JSON.parse(StorageUtil.getItem({ key: 'crd', type: 'cookie' })!) : null,
    setState: (data) => set({ data }), 
}))