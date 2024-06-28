import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export class Utils {
    // utils tailwindcss
    static cn(...input: ClassValue[]): string {
        return twMerge(clsx(input))
    }

    static applyDiscount(price: number, discountPercent: number, minimumPrice?: number): number {
        if (minimumPrice !== undefined && price < minimumPrice) {
            return price;
        }
    
        const discountAmount = (price * discountPercent) / 100;
    
        const finalPrice = price - discountAmount;
    
        return finalPrice;
    }
}