import { Utils } from "@/libs/utils/index.util";
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
                <h1 className={Utils.cn('font-bold text-lg xxs:text-2xl xs:text-3xl lg:text-5xl text-center sm:w-2/3 w-full my-2 xxs:my-5 sm:px-0 px-7 leading-6 xxs:leading-normal', className)}>{title}</h1>
            );
        }

        case "subheading": {
            return (
                <h2 className={Utils.cn("font-bold lg:text-3xl xs:text-2xl xxs:text-xl w-full", className)}>{title}</h2>
            );
        }

        case "text": {
            return (
                <p className={Utils.cn('lg:font-medium md:text-lg sm:text-base text-xs xxs:text-sm', className)}>{title}</p>
            );
        }
    }
};