"use client";

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import ModalAuth from "../micro/modalAuth.micro";
import { usePathname } from "next/navigation";
import { DataLocalizationType } from "@/types/nav.type";

export default function NavbarCustom({ data } : { data: DataLocalizationType }) {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <>
            <ModalAuth isOpen={isOpenModal} handeModal={setIsOpenModal} />
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >

                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <Link href="/">
                            <Image src={data?.attributes?.icon?.data?.attributes?.url} alt="Logo Dinanti" width={500} height={500} className="w-20" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <Link href="/">
                            <Image src={data?.attributes?.icon?.data?.attributes?.url} alt="Logo Dinanti" width={500} height={500} className="w-20" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarContent justify="end" className="hidden sm:flex gap-10 mr-12">
                        { data?.attributes?.navigation.map((item, index) => (
                            <NavbarItem key={`${item}-${index}`}>
                                <Link href={ item.url } className={`${item.url === pathname ? 'text-black font-bold' : null} text-[#353] hover:font-bold hover:text-black`}>{ item.title }</Link>
                            </NavbarItem>
                        )) }

                    </NavbarContent>

                    <NavbarItem>
                        <Button onClick={() => setIsOpenModal(true)} size="md" href="#" variant="flat" radius="full" className="bg-[#1D1D1D] text-white font-bold hidden sm:flex">
                            Login / Daftar
                        </Button>
                        <Button onClick={() => setIsOpenModal(true)} size="sm" href="#" variant="flat" radius="full" className="bg-[#1D1D1D] text-white font-bold sm:hidden">
                            Login / Daftar
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {data?.attributes?.navigation?.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`${item.url === pathname ? 'text-black font-bold' : null} w-full`}
                                href={item.url}
                                color="foreground"
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}
