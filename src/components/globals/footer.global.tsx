import LayoutContainer from "@/containers/layout.container";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Utils } from "@/libs/utils/index.util";
import { FooterType } from "@/libs/types/nav.type";

const BlockRendererClient = dynamic(() => import("./rich_text.global"))

interface FooterProps extends HTMLAttributes<HTMLElement> {
    data: FooterType
}

export default function Footer({ data, className, ...rest }: FooterProps) {
    return (
        <footer className={Utils.cn("footer p-10 bg-base-200 text-NEUTRAL", className)} {...rest}>
            <LayoutContainer className="flex items-start sm:items-center sm:justify-between flex-col sm:flex-row">
                <aside className="flex flex-col gap-y-2 items-start justify-start">
                    <Link href="/">
                        { data?.icon?.data?.attributes?.url ? (
                            <Image 
                                src={data?.icon?.data?.attributes?.url} width={100} height={100} 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Icon Dinanti"
                                className="w-20 lg:w-28"
                            />
                        ) : null }
                    </Link>
                    <div className="sm:leading-6 text-[0.7rem] xs:text-xs sm:text-sm">
                        <BlockRendererClient content={data?.description} />
                    </div>
                </aside>
                <nav>
                    <p className="footer-title">Social</p>
                    <div className="grid grid-flow-col gap-4">
                        { data?.social_link?.map(item => (
                            <Link href={item?.url} key={item?.id}>
                                <Icon icon={item?.icon_txt} className="text-lg sm:text-2xl" />
                            </Link>
                        )) }
                    </div>
                </nav>
            </LayoutContainer>
        </footer>
    )
}