import StorageUtil from "@/libs/helpers/storage.helper";
import { StorageType } from "@/libs/types/storage.type";
import { notFound } from "next/navigation";

type FetchType = {
    path: string;
    requestInit?: RequestInit;
    setStorage?: string;
    typeStorage?: StorageType;
};

const baseURL: string = process.env.BASE_URL! ?? "http://localhost:1337";

export class Fetch {
    static async get<T>({ path, requestInit, setStorage, typeStorage }: FetchType): Promise<T> {
        "use server";
        const { signal } = new AbortController();
        try {
            const dataFetch = await fetch(baseURL + path, { signal, next: { revalidate: 10 }, ...requestInit });

            if (!dataFetch.ok) {
                if (dataFetch?.status === 404) notFound();
            }

            const { data } = await dataFetch.json();

            const result = data as T;

            if (setStorage) {
                StorageUtil.setItem({ key: "lang", value: setStorage, days: 30, type: typeStorage });
            }

            return result;
        } catch (error: any) {
            return error;
        }
    }

    static async getWithMeta<T>({ path, requestInit, setStorage, typeStorage }: FetchType): Promise<T> {
        "use server";
        const { signal } = new AbortController();
        try {
            const dataFetch = await fetch(baseURL + path, { signal, next: { revalidate: 10 }, ...requestInit });

            if (!dataFetch.ok) {
                if (dataFetch?.status === 404) notFound();
            }

            const data = await dataFetch.json();

            const result = data as T;

            if (setStorage) {
                StorageUtil.setItem({ key: "lang", value: setStorage, days: 30, type: typeStorage });
            }

            return result;
        } catch (error: any) {
            return error;
        }
    }
}
