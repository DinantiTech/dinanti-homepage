"use server";

import dynamic from "next/dynamic";

import { DataLocalizationType } from "@/types/nav.type";
import { Fetch } from "@/actions/services/fetch.service";

const NavbarCustom = dynamic(() => import("./navbar.common"));

export default async function ContainerNavbar({
    children,
}: {
    children: React.ReactNode
}) {
    const data = await Fetch.get<DataLocalizationType>("/api/navigation?populate=*&locale=id", { cache: "default" })

    return (
        <div 
        // style={{
        //     backgroundImage: !isBgShowing
        //         ? 'url("/line.svg")'
        //         : 'none',
        // }}
            className={`${!true ? 'bg-[#FDFFF8]' : 'bg-[#EDEFE2]'} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
            <NavbarCustom data={data} />
            {children}
        </div>
    )
}