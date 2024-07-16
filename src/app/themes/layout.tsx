import { ReactNode } from "react";

export default function LayoutTheme({ children }: { children: ReactNode }) {
    return (
        <div style={{ backgroundImage: "none" }}>
            {children}
        </div>
    )
}