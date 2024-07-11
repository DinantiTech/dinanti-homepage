"use server";

import LayoutContainer from "@/containers/layout.container";

export default async function ThemeDetailTemplate({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>{children}</LayoutContainer>
    )
}