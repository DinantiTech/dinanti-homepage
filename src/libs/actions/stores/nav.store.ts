// import { create } from "zustand";
// import { Fetch } from "../services/fetch.service";

// type StateStore = {
//     state?: DataLocalizationType | null
// }

// type ActionStore = {
//     setState: (locale?: string) => void;
// };

// export const useNavStore = create<StateStore & ActionStore>((set) => ({
//     state: null,
//     setState: async (locale?: string) => {
//         const data: DataLocalizationType = await Fetch.get(`/api/navigation?populate=*&locale=${locale ?? "id"}`);
        
//         return set({ state: data })
//     }, 
// }))