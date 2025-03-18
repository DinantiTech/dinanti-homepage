"use server";

import LayoutContainer from "@/containers/layout.container";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Utils } from "@/libs/utils/index.util";
import { getTranslations } from "next-intl/server";
import { DINANTI } from "@/libs/constants/dinanti.const";

interface FooterProps extends HTMLAttributes<HTMLElement> {}

export default async function Footer({ className, ...rest }: FooterProps) {
    const t = await getTranslations('Footer')

    const socialMedia = [
        { title: "X", icon: "fa6-brands:square-x-twitter", url: "/" },
        { title: "Instagram", icon: "fa6-brands:square-instagram", url: "/" },
        { title: "Facebook", icon: "fa6-brands:square-facebook", url: "/" },
    ]

    return (
        <footer className={Utils.cn("footer p-10 bg-MIDNIGHT text-white absolute -z-10", className)} {...rest}>
            <LayoutContainer className="flex items-start sm:items-center sm:justify-between flex-col sm:flex-row">
                <aside className="flex flex-col gap-y-2 items-start justify-start">
                    <Link href="/">
                        <Image 
                            src={DINANTI.logo_white} width={100} height={100} 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Icon Dinanti"
                            className="w-12 xxss:w-16 xxs:w-20 lg:w-28"
                            loading="lazy"
                        />
                    </Link>
                    <div className="sm:leading-6 text-[0.5rem] xxss:text-[0.7rem] xs:text-xs flex flex-col items-start justify-center">
                        <span>{t('built')}</span>
                        <span>{t('providing')}</span>
                        <span>{t('copyright')}</span>
                    </div>
                </aside>
                <nav>
                    <p className="footer-title">Social</p>
                    <div className="grid grid-flow-col gap-4">
                        { socialMedia.map((item, idx) => (
                            <Link href={item?.url} key={idx}>
                                <Icon icon={item?.icon} className="text-lg sm:text-2xl" />
                            </Link>
                        )) }
                    </div>
                </nav>
            </LayoutContainer>
        </footer>
    )
}