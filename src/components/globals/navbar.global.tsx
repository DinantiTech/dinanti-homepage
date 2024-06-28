"use server";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { HTMLAttributes, Suspense } from "react";

import { DataLocalizationType, NavigationType } from "@/types/nav.type";
import { Utils } from "@/utils/index.util";
import dynamic from "next/dynamic";

const DrowdownLanguage = dynamic(() => import("@/components/micro/lang_dropdown.micro"), { ssr: true });

export default async function NavbarCustom({ data }: { data: DataLocalizationType }) {

    const dataLocale = data?.attributes?.localizations;
    const currentLocal = data?.attributes?.locale;

    return (
        <header>
            <div className="fixed top-0 w-full bg-base-100 z-[999] shadow-lg">
                <div className="navbar w-full max-w-[1024px] mx-auto">

                    {/* Start */}
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border-2 border-lime-900/10">
                                <NavList data={data?.attributes?.navigation} isSidebar />
                            </ul>
                        </div>

                        <BrandLogo imageUrl={data?.attributes?.icon?.data?.attributes?.url} />
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavList data={data?.attributes?.navigation} />
                        </ul>
                    </div>

                    {/* End */}
                    <div className="navbar-end flex items-center justify-end gap-2">
                        <button className="btn group-hover:text-lime-900">
                            <Icon icon="vaadin:paperplane" />
                            Masuk
                        </button>

                        <Suspense>
                            <DrowdownLanguage currentLocal={currentLocal} locales={dataLocale} />
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
        <Link href="/" className={Utils.cn("w-12 xxs:w-[4.5rem] sm:w-[6rem]", className)} {...rest}>
            <Image src={imageUrl} alt="Logo Dinanti" width={500} height={500} className="w-full" />
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
