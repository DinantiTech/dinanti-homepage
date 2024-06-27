
import LayoutContainer from "@/containers/layout.container";
import { DataLocalizationType, NavigationType } from "@/types/nav.type";
import { Utils } from "@/utils/index.util";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function NavbarCustom({ data }: { data: DataLocalizationType }) {

    return (
        <header>
            <div className="fixed top-0 w-full bg-base-100 z-[999] shadow-lg">
                <div className="navbar w-full max-w-[1024px] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <NavList data={data?.attributes?.navigation} />
                            </ul>
                        </div>

                        <BrandLogo imageUrl={data?.attributes?.icon?.data?.attributes?.url} className="hidden lg:block" />
                    </div>
                    <BrandLogo imageUrl={data?.attributes?.icon?.data?.attributes?.url} className="lg:hidden" />

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavList data={data?.attributes?.navigation} />
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
interface BrandLogoProps extends HTMLAttributes<HTMLAnchorElement> {
    imageUrl: string;
}

function BrandLogo({ imageUrl, className, ...rest }: BrandLogoProps) {

    return (
        <Link href="/" className={Utils.cn("w-16 xxs:w-[5.5rem] sm:w-[6rem]", className)} {...rest}>
            <Image src={imageUrl} alt="Logo Dinanti" width={500} height={500} className="w-full" />
            <p className="hidden">Dinanti Logo</p>
        </Link>
    );
}


function NavList({ data }: { data: NavigationType[] }) {
    return (
        <>
            {data?.map((item) => (
                <li className="group" key={item?.id}>
                    <Link className="group-hover:font-bold font-medium group-hover:text-lime-900" href={item?.url}>{item?.title}</Link>
                </li>
            ))}
        </>
    )
}
