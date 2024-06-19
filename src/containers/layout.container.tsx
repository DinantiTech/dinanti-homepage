import { Utils } from "@/utils/index.util";
import { HTMLAttributes, ReactNode } from "react";

interface LayoutContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function LayoutContainer({ children, className, ...rest }: LayoutContainerProps) {
    return (
        <div className={Utils.cn("w-full h-full mx-auto max-w-[1024px] xl:px-0 md:px-8 sm:px-6 px-4", className)} { ...rest }>
            { children }
        </div>
    )
}