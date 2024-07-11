"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";

import { Utils } from "@/libs/utils/index.util";

import Clover from "@/assets/clover.jpeg";
import StorageUtil from "@/libs/helpers/storage.helper";
interface LayoutContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function LayoutContainer({ children, className, ...rest }: LayoutContainerProps) {
    const router = useRouter();
    const [isSmallLayout, setIsSmallLayout] = useState<boolean>(false)

    useEffect(() => {
      const checkScreenWidth = () => {
        if (window.innerWidth < 280) {
            setIsSmallLayout(true)
        }
      };
  
      // Check on initial load
      checkScreenWidth();
  
      // Check on window resize
      window.addEventListener('resize', checkScreenWidth);
  
      // Cleanup
      return () => window.removeEventListener('resize', checkScreenWidth);
    }, [router]);
    
    return (
        <div className={Utils.cn("w-full h-full mx-auto max-w-[1024px] xl:px-0 md:px-8 sm:px-6 px-4 overflow-hidden scroll-smooth", className)} { ...rest }>
            { isSmallLayout ? <AttentionLayout /> : children }
        </div>
    )
}

function AttentionLayout() {
    const getLang = StorageUtil.getItem({ key: 'lang', type: "cookie" }) ?? "id";
    
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
            <Image src={Clover} alt="clover" height={300} width={300} className="w-20 rounded-full" />
            <p className="text-xs">
                {getLang !== "id" ? "For the best experience, check out this page on a device with a bigger screen" : "Untuk pengalaman terbaik, silakan buka halaman ini di perangkat dengan layar yang lebih besar"}
            </p>
        </div>
    )
}