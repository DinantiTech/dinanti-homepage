export class Fetch {
    private static baseURL: string = process.env.BASE_URL! ?? "https://m9fdg0jl-1337.asse.devtunnels.ms";
    
    static async get<T>(path: string, requstInit?: RequestInit): Promise<T> {
        "use server";
        const { signal } = new AbortController()
        try {
            console.log(this.baseURL + path)
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
