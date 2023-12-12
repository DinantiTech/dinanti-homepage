"use client";

import { usePathname } from "next/navigation"
import NavbarCustom from "./navbar.common"

export default function ContainerNavbar({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const isBgShowing = pathname.includes('blogs');

    return (
        <div style={{
            backgroundImage: !isBgShowing
              ? `url("/line.svg")`
              : 'none',
          }} 
            
          className={`${isBgShowing ? 'bg-[#FDFFF8]' : ''} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
            <NavbarCustom />
            {children}
        </div>
    )
}