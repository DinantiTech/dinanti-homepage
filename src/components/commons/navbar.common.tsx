import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import LogoDinanti from "@/assets/logo.svg";
import Image from "next/image";

export default function NavbarCustom() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems = [
        "Home",
        "Harga",
        "Tema",
        "Blog",
    ];

    return (
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
                    <NavbarItem>
                        <Link href="/" className="text-[#353] hover:font-bold hover:text-black">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/harga" className="text-[#353] hover:font-bold hover:text-black" aria-current="page">Harga</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-[#353] hover:font-bold hover:text-black">Tema</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-[#353] hover:font-bold hover:text-black">Blog</Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarItem>
                    <Button as={Link} size="md" href="#" variant="flat" radius="full" className="bg-[#1D1D1D] text-white font-bold hidden sm:flex">
                        Login / Daftar
                    </Button>
                    <Button as={Link} size="sm" href="#" variant="flat" radius="full" className="bg-[#1D1D1D] text-white font-bold sm:hidden">
                        Login / Daftar
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
