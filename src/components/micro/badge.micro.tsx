import { Utils } from "@/libs/utils/index.util";
import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    type?: string;
    label: string;
    icon?: string;
}

export default function Badge({ type, label, className, icon = "icon-park-twotone:green-new-energy", ...rest }: BadgeProps) {
    switch (type) {
        case "new": {
            return (
                <div className={Utils.cn("relative overflow-hidden rounded-full bg-green-100 text-green-800 flex items-center justify-center px-2.5 py-0.5 gap-1", className)} {...rest}>
                    <Icon icon="icon-park-twotone:green-new-energy" />
                    <span className="inline-flex items-center text-xs xxs:text-sm font-medium">
                        {label}
                    </span>
                    <div className="absolute top-0 left-0 inset-0 animate-shimmer"
                        style={{
                            background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                            backgroundSize: "200% 100%"
                        }}
                    />
                </div>
            )
        }
        case "exclusive": {
            return (
                <div className="relative inline-flex overflow-hidden rounded-full text-yellow-900 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 px-3 py-1 gap-1">
                    <Icon icon={icon} />
                    <span className="inline-flex items-center text-xs font-bold ">
                        {label}
                    </span>
                    <div
                        className="absolute top-0 left-0 inset-0 animate-shimmer"
                        style={{
                            background: 'linear-gradient(to right, rgba(255,215,0,0) 0%, rgba(255,215,0,0.5) 50%, rgba(255,215,0,0) 100%)',
                            backgroundSize: '200% 100%'
                        }}
                    />
                </div>
            )
        }
        case "premium": {
            return (
                <div className="relative inline-flex overflow-hidden rounded-full text-gray-700 bg-gradient-to-r from-gray-100 to-gray-100 px-3 py-1 gap-1">
                    <Icon icon={icon} />
                    <span className="inline-flex items-center text-xs font-bold ">
                        {label}
                    </span>
                    <div
                        className="absolute inset-0 animate-silver-shimmer"
                        style={{
                            background: 'linear-gradient(to right, rgba(192,192,192,0) 0%, rgba(192,192,192,0.5) 50%, rgba(192,192,192,0) 100%)',
                            backgroundSize: '200% 100%'
                        }}
                    />
                </div>
            )
        }
        case "lovers": {
            return (
                <div className="relative inline-flex overflow-hidden rounded-full text-pink-700 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 px-3 py-1 gap-1">
                    <Icon icon={icon} />
                    <span className="inline-flex items-center text-xs font-bold">
                        {label}
                    </span>
                    <div
                        className="absolute top-0 left-0 inset-0 animate-shimmer"
                        style={{
                            background: 'linear-gradient(to right, rgba(255,192,203,0) 0%, rgba(255,192,203,0.5) 50%, rgba(255,192,203,0) 100%)',
                            backgroundSize: '200% 100%'
                        }}
                    />
                </div>
            )
        }
        default:
            return null;
    }
}