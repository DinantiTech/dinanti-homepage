import { createClient } from "../utils/supabase/server.supabase";
import { cookies } from 'next/headers'

export default class Auth {
    private supabase = createClient()
    private cookieStore = cookies()

    async login(data: LoginType) {
        if (data) {
            let user = await (await this.supabase).from('user').update({ login_at: new Date() }).eq('email', data?.email).select('id, email, username').single();
            if (!user?.data) {
                const insert = await (await this.supabase).from('user').insert({ email: data?.email, username: data?.given_name, login_at: new Date() }).select('id, email, username').single();
                user = insert
            }

            if (user?.error) throw { ...user?.error }

                ; (await this.cookieStore).set('crd', JSON.stringify({ id: user?.data?.id, ...data }), { secure: true });

            return user?.data
        }
    }

    async logout() {
        ((await this.cookieStore).delete('crd'))
    }
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