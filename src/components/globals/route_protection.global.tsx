"use server";

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface User {
    role: string;
}

export default async function ProtectionRoute({ children }: { children: ReactNode }) {
    const cookieStore = cookies();
    const userCookie = (await cookieStore).get('crd');

    // Ambil referer header (URL sebelumnya)
    const headersList = headers();
    const referer = (await headersList).get('referer') || '/';

    // Jika tidak ada user, redirect ke referer atau home
    if (!userCookie) {
        return redirect(referer);
    }

    // Parse data user dari cookie
    let user: User;
    try {
        user = JSON.parse(userCookie.value);
    } catch (error) {
        console.error('Error parsing user cookie:', error);
        return redirect(referer);
    }

    if (user.role !== "user" && user.role !== "admin") {
        return redirect(referer);
    }

    return children;
}