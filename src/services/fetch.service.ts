export class Fetch {
    private static baseURL: string = process.env.BASE_URL!;

    static async get<T>(path: string, requstInit?: RequestInit): Promise<T> {
        const { signal } = new AbortController()
        try {
            const dataFetch = await fetch(this.baseURL + path, { signal, ...requstInit });

            if (!dataFetch.ok) {
                throw new Error(`Error fetching data: ${dataFetch.statusText}`);
            }

            const { data } = await dataFetch.json();

            const result = data as T;

            return result;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    }
}
