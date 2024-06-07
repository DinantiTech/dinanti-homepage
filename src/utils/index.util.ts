import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export class Utils {
    // utils tailwindcss
    static cn(...input: ClassValue[]): string {
        return twMerge(clsx(input))
    }
}