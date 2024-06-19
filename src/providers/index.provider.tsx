"use client";

import { ReactNode } from "react";
import { useLocale } from "react-aria-components";

export default function IndexProvider({ children }: { children: ReactNode }) {
    const {locale, direction} = useLocale();
    return (
        <html lang={locale} dir={direction} data-theme="base">
            { children }
        </html>
    )
}