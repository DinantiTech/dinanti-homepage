import { Utils } from "@/utils/index.util";
import { HTMLAttributes, ReactNode } from "react";

interface ContainerLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function Container({ children, className, ...rest }: ContainerLayoutProps) {
    return (
        <div className={Utils.cn("w-full h-full mx-auto max-w-[1024px] lg:px-0 sm:px-6 px-4", className)} { ...rest }>
            { children }
        </div>
    )
}