"use server";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import { HTMLAttributes, Suspense } from "react";

import { Utils } from "@/libs/utils/index.util";
import { DataNavigationsType, NavigationType } from "@/libs/types/nav.type";
import bgBatik from '@/assets/images/bg-batik.png';

const DrowdownLanguage = dynamic(() => import("@/components/micro/lang_dropdown.micro"), { ssr: true });

export default async function NavbarCustom({ data }: { data: DataNavigationsType }) {

    const dataLocale = data?.attributes?.localizations;
    const currentLocal = data?.attributes?.locale;

    const isLogin: boolean = false;

    const createInvitationNav = data?.attributes?.others?.find(item => item.type === "create_invitation");

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
                        {createInvitationNav ? (
                            <Link href={createInvitationNav?.url} className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                                {createInvitationNav?.icon_txt ? (<Icon icon={createInvitationNav?.icon_txt} />) : null}
                                <span className="hidden xxss:block">{createInvitationNav?.title}</span>
                            </Link>
                        ) : null}

                        {isLogin ? (
                            <button name="button dashboard" className="btn btn-xs xxs:btn-sm lg:btn-md hover:bg-white/0 bg-opacity-0">
                                {true ? (
                                    <span className="">P</span>
                                ) : null}
                            </button>
                        ) : null}

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
        <Link href="/" className={Utils.cn("w-14 xxs:w-[4rem] sm:w-[6rem] z-10", className)} {...rest}>
            <Image priority src={imageUrl} alt="Logo Dinanti" width={500} height={500} className="w-full pb-1" />
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
