// app/api/auth/login/route.ts
import Auth from '@/libs/actions/auth.action';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = (await req.json()) as { email: string };
        const auth = new Auth();
        const user = await auth.login(data);

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
