"use client";

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import LogoDinanti from "@/assets/logo.svg";
import Image from "next/image";
import ModalAuth from "../micro/modalAuth.micro";
import { usePathname } from "next/navigation";

export default function NavbarCustom() {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const menuItems = [
        { title: "Home", link: '/' },
        { title: "Harga", link: '/harga' },
        { title: "Tema", link: '/tema' },
        { title: "Blogs", link: '/blogs' }
    ];

    // const data = 

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
                            <Image src={LogoDinanti} alt="Logo Dinanti" width={500} height={500} className="w-20" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <Link href="/">
                            <Image src={LogoDinanti} alt="Logo Dinanti" width={500} height={500} className="w-20" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarContent justify="end" className="hidden sm:flex gap-10 mr-12">
                        { menuItems.map((item, index) => (
                            <NavbarItem key={`${item}-${index}`}>
                                <Link href={ item.link } className={`${item.link === pathname ? 'text-black font-bold' : null} text-[#353] hover:font-bold hover:text-black`}>{ item.title }</Link>
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
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`${item.link === pathname ? 'text-black font-bold' : null} w-full`}
                                href={item.link}
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
