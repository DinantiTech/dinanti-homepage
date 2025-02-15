import { createClient } from "../utils/supabase/server.supabase";
import { cookies } from 'next/headers'

export default class Auth {
    private supabase = createClient()
    private cookieStore = cookies()

    async login(data: LoginType) {
        const user = await this.supabase.from('user').select().eq('email', data?.email).single();
        if(!user.error) {
            await this.supabase.from('user').update({ login_at: new Date() }).eq('id', user?.data?.id)
            this.cookieStore.set('crd', JSON.stringify({ id: user?.data?.id, ...data }), { secure: true });

            return true
        }

        return false
    }

    private logout() {}
}

type LoginType = {
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string,
    picture?: string,
    email: string;
    email_verified?: boolean,

    username?: string;
    password?: string;
}