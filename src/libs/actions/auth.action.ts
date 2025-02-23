import { createClient } from "../utils/supabase/server.supabase";
import { cookies } from 'next/headers'

export default class Auth {
    private supabase = createClient()
    private cookieStore = cookies()

    async login(data: LoginType) {
        try {
            if(data) {
                let id;
                const user = await this.supabase.from('user').update({ login_at: new Date() }).eq('email', data?.email).select('id, email, username').single();
                if (!user?.data) {
                    const insert = await this.supabase.from('user').insert({ email: data?.email, username: data?.given_name, login_at: new Date() }).select('id, email, username').single();
                    id = insert?.data?.id
                }
    
                if(!user?.data && !id) return false
    
                this.cookieStore.set('crd', JSON.stringify({ id: user?.data?.id ?? id, ...data }), { secure: true });
    
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }

    private logout() { }
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