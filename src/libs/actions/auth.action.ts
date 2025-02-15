import { createClient } from "../utils/supabase/server.supabase";

export default class Auth {
    private supabase = createClient()

    async login({ email }: LoginType) {
        return this.supabase.from('user').select().eq('email', email).single();
    }

    private logout() {}
}

type LoginType = {
    email: string;
    username?: string;
    password?: string;
}