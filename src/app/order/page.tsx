"use server";

import { Metadata } from "next";
import dynamic from "next/dynamic"
import { Suspense } from "react";

const Maintenance = dynamic(() => import("@/components/globals/maintenance"));

export default async function MaintenancePage() {
    return (
        <Suspense> <Maintenance /> </Suspense>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Pesan Undangan - Dinanti",
        description: "Pesan undangan digital yang elegan dan personal untuk berbagai acara Anda hanya di Dinanti. Mudah, cepat, dan terjangkau.",
        keywords: "pesan undangan digital, undangan online, undangan pernikahan, undangan ulang tahun, undangan acara, Dinanti",
        classification: "digital invitation",
        alternates: {
            canonical: "https://dinanti.id/order",
        },
    }
}
