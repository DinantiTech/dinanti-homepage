"use server";

import dynamic from "next/dynamic";
import { headers } from "next/headers";

import { Fetch } from "@/actions/services/fetch.service";
import { DataLocalizationType } from "@/types/nav.type";

const NavbarCustom = dynamic(() => import("./navbar.common"));

export default async function ContainerNavbar({
    children,
}: {
    children: React.ReactNode
}) {
    const headerList = headers();
    const isBgShowing = headerList?.get("blogs");

    const data = await Fetch.get<DataLocalizationType>("/api/navigation?populate=*&locale=id", { cache: "default" })

    return (
        <div style={{
            backgroundImage: !isBgShowing
                ? 'url("/line.svg")'
                : 'none',
        }}
            className={`${!isBgShowing ? 'bg-[#FDFFF8]' : 'bg-[#EDEFE2]'} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
            <NavbarCustom data={data} />
            {children}
        </div>
    )
}