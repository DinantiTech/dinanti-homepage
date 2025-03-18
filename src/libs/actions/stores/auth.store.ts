import { create } from "zustand";
import StorageUtil from "@/libs/helpers/storage.helper";

type StateStore = {
    data: Record<string, any> | null;
    isLogin: boolean;
};

type ActionStore = {
    setState: (data: Record<string, any> | null) => void;
    clearState: () => void;
};

export const useAuthStore = create<StateStore & ActionStore>((set) => {
    // Ambil data dari cookies saat store diinisialisasi
    const initialData = StorageUtil.getItem({ key: 'crd', type: 'cookie' });
    const parsedData = initialData ? JSON.parse(initialData) : null;

    return {
        data: parsedData,
        isLogin: !!parsedData, // isLogin akan true jika data ada
        setState: (data) => {
            // Simpan data ke cookies dan perbarui state
            StorageUtil.setItem({ key: 'crd', type: 'cookie', value: JSON.stringify(data) });
            set({ data, isLogin: !!data });
        },
        clearState: () => {
            // Hapus data dari cookies dan reset state
            StorageUtil.removeItem({ key: 'crd', type: 'cookie' });
            set({ data: null, isLogin: false });
        },
    };
});