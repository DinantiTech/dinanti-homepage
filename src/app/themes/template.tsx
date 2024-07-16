// "use client"

import IndexProvider from "@/libs/providers/index.provider";
import { ReactNode } from "react";

export default function TemplateTheme({ children }: { children: ReactNode }) {
    console.log("awokwokwokwokowkwko");
    
    return (
        <IndexProvider>
            <div style={{ backgroundImage: "none" }}>
                { children }
            </div>
        </IndexProvider>
    )
}