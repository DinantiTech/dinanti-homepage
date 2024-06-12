import { Utils } from "@/utils/index.util";
import { Navbar, NavbarBrand, NavbarContent, NavbarContentProps, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";

export default function NavSkeleton() {
    return (
        <Navbar isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <div className="bg-slate-300 animate-pulse h-5 w-7 xxs:w-10" />
            </NavbarContent>

            <LogoBrand className="hidden sm:flex gap-4" />

            <LogoBrand className="sm:hidden pr-3" />

            <NavbarContent justify="end">
                <NavbarContent justify="end" className="hidden sm:flex gap-10 mr-12">
                    {[1, 2, 3].map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <div className="w-10 h-4 bg-slate-300 animate-pulse" />
                        </NavbarItem>
                    ))}

                </NavbarContent>
            </NavbarContent>
        </Navbar>
    );
}

function LogoBrand({ className, ...rest }: NavbarContentProps) {
    return (
        <NavbarContent className={ Utils.cn(className) } { ...rest } justify="center">
            <NavbarBrand>
                <div className="w-20 h-6 bg-slate-300 animate-pulse" />
            </NavbarBrand>
        </NavbarContent>
    )
}