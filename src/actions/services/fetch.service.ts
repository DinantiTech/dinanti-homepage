import StorageUtil from "@/helpers/storage.helper";
import { StorageType } from "@/types/storage.type";

type FetchType = {
    path: string;
    requestInit?: RequestInit;
    setStorage?: string;
    typeStorage?: StorageType
}

export class Fetch {
    private static baseURL: string = process.env.BASE_URL! ?? "http://localhost:1337";
    
    static async get<T>({ path, requestInit, setStorage, typeStorage } : FetchType): Promise<T> {
        "use server";
        const { signal } = new AbortController()
        try {
            console.log(this.baseURL + path)
            const dataFetch = await fetch(this.baseURL + path, { signal, next: { revalidate: 10 }, ...requestInit });

            if (!dataFetch.ok) {
                throw new Error(`Error fetching data: ${dataFetch.statusText}`);
            }

            const { data } = await dataFetch.json();

            const result = data as T;

            if(setStorage) {
                StorageUtil.setItem({ key: "lang", value: setStorage, days: 30, type: typeStorage });
            }

            return result;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }
}
