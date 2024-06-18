import { Utils } from "@/utils/index.util";
import { HTMLProps } from "react";

type HeadingProps = {
    type: "heading" | "subheading" | "text",
    title: string;
    className?: HTMLProps<HTMLElement>["className"]
}

export default function Heading({ type, title, className } : HeadingProps) {
    switch(type) {
        case "heading": {
            return (
                <h1 className={Utils.cn('font-bold text-2xl xxs:text-3xl lg:text-5xl text-center sm:w-2/3 w-full my-5 sm:px-0 px-7', className)}>{title}</h1>
            );
        }

        case "subheading": {
            return (
                <h2 className={Utils.cn("font-bold lg:text-3xl sm:text-2xl text-xl w-full", className)}>{title}</h2>
            );
        }

        case "text": {
            return (
                <p className={Utils.cn('lg:font-medium lg:text-md', className)}>{title}</p>
            );
        }
    }
};