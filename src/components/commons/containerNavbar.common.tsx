"use client";

import { usePathname } from "next/navigation"
import { Suspense, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

import NavSkeleton from "../skeletons/nav.skeleton";
import { useNavStore } from "@/stores/nav.store";

const NavbarCustom = dynamic(() => import("./navbar.common"), { ssr: true });

export default function ContainerNavbar({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const { setState, state } = useNavStore();

    const isBgShowing = pathname.includes('blogs');

    useEffect(() => {
        return () => {
            setState()
        }
    }, [])

    return (
        <div style={{
            backgroundImage: !isBgShowing
              ? 'url("/line.svg")'
              : 'none',
          }} 
            
          className={`${!isBgShowing ? 'bg-[#FDFFF8]' : 'bg-[#EDEFE2]'} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
            <Suspense fallback={<NavSkeleton />}>
                <NavbarCustom data={state!} />
            </Suspense>
            {children}
        </div>
    )
}