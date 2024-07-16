import dynamic from "next/dynamic"
import { Suspense } from "react";

const Maintenance = dynamic(() => import("@/components/globals/maintenance"));

export default function MaintenancePage() {
    return (
        <Suspense> <Maintenance /> </Suspense>
    )
}