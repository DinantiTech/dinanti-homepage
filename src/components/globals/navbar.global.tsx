"use server";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { HTMLAttributes, Suspense } from "react";

import dynamic from "next/dynamic";
import { Utils } from "@/libs/utils/index.util";
import { DataNavigationsType, NavigationType } from "@/libs/types/nav.type";

const DrowdownLanguage = dynamic(() => import("@/components/micro/lang_dropdown.micro"), { ssr: true });

export default async function NavbarCustom({ data }: { data: DataNavigationsType }) {

    const dataLocale = data?.attributes?.localizations;
    const currentLocal = data?.attributes?.locale;

    const isLogin: boolean = false;

    return (
        <header>
            <div className="fixed top-0 w-full bg-base-100 z-[999] shadow-lg">
                <div className="navbar w-full max-w-[1024px] mx-auto">

                    {/* Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-xs xxs:btn-sm btn-ghost hover:bg-white/0 lg:hidden">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border-2 border-lime-900/10">
                                <NavList data={data?.attributes?.navbars} isSidebar />
                            </ul>
                        </div>

                        <BrandLogo imageUrl={data?.attributes?.icon?.data?.attributes?.url} />
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavList data={data?.attributes?.navbars} />
                        </ul>
                    </div>

                    {/* End */}
                    <div className="navbar-end flex items-center justify-end gap-2">
                        <Link href="/" className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                            <Icon icon="ic:round-plus" />
                            <span className="hidden xxss:block">Undangan</span>
                        </Link>
                        
                        { isLogin ? (
                            <button name="button dashboard" className="btn btn-xs xxs:btn-sm lg:btn-md hover:bg-white/0 bg-opacity-0">
                                { true ? (
                                    <span className="">P</span>
                                ) : null }
                            </button>
                        ): null }

                        <Suspense>
                            <DrowdownLanguage 
                                currentLocal={currentLocal}
                                locales={dataLocale}
                                className="hidden xxxss:block"
                            />
                        </Suspense>
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
        <Link href="/" className={Utils.cn("w-14 xxs:w-[4rem] sm:w-[6rem]", className)} {...rest}>
            <Image src={imageUrl} alt="Logo Dinanti" width={500} height={500} className="w-full pb-1" />
            <p className="hidden">Dinanti Logo</p>
        </Link>
    );
}


function NavList({ data, isSidebar }: { data: NavigationType[], isSidebar?: boolean }) {
    return (
        <>
            {data?.map((item) => (
                <li className="group" key={item?.id}>
                    <Link className={`${isSidebar ? "py-3 border border-lime-900/10 m-0.5" : null} group-hover:font-bold font-medium group-hover:text-lime-900`} href={item?.url}>{item?.title}</Link>
                </li>
            ))}
        </>
    )
}
