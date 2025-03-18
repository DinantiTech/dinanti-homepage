"use server";

import Link from "next/link";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

import { Utils } from "@/libs/utils/index.util";
import bgBatik from '@/assets/images/bg-batik.png';
import { DINANTI } from "@/libs/constants/dinanti.const";
import DrowdownLanguage from "../micro/lang_dropdown.micro";
import { getTranslations } from "next-intl/server";
import UserAndCreateInviteButton from "../buttons/user_and_create.btn";

export default async function NavbarCustom() {
    const t = await getTranslations('Navbar')

    const listNavbar = [
        { title: t('home'), url: '/' },
        { title: t('themes'), url: '/themes' },
        { title: t('pricing'), url: '/pricing' },
    ]

    return (
        <header>
            <div className="fixed top-0 w-full bg-base-100 z-50 shadow-lg">
                <div className="navbar w-full max-w-[1024px] mx-auto p-0">

                    {/* Start */}
                    <div className="navbar-start relative">
                        <div style={{
                            backgroundImage: `url(${bgBatik.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} className="absolute -left-10 w-full h-20 opacity-30 md:opacity-40 z-0" />

                        <div className="dropdown z-30">
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
                                <NavList data={listNavbar} isSidebar />
                            </ul>
                        </div>

                        <BrandLogo imageUrl={DINANTI.logo} />
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavList data={listNavbar} />
                        </ul>
                    </div>

                    {/* End */}
                    <div className="navbar-end flex items-center justify-end gap-2">
                        <UserAndCreateInviteButton />

                        <DrowdownLanguage
                            className="hidden xxxss:block"
                        />
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
        <Link href="/" className={Utils.cn("w-14 xxs:w-[4rem] sm:w-[6rem] z-10", className)} {...rest}>
            <Image priority src={imageUrl} alt="Logo Dinanti" width={500} height={500} className="w-full pb-1" />
            <p className="hidden">Dinanti Logo</p>
        </Link>
    );
}


function NavList({ data, isSidebar }: { data: Record<string, string>[], isSidebar?: boolean }) {
    return (
        <>
            {data?.map((item, idx) => (
                <li className="group" key={idx}>
                    <Link className={`${isSidebar ? "py-3 border border-lime-900/10 m-0.5" : null} group-hover:font-bold font-medium group-hover:text-lime-900`} href={item?.url}>{item?.title}</Link>
                </li>
            ))}
        </>
    )
}
