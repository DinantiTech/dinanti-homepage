import LayoutContainer from "@/containers/layout.container";
import { FooterType } from "@/types/nav.type";
import { Utils } from "@/utils/index.util";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import dynamic from "next/dynamic";

const BlockRendererClient = dynamic(() => import("../contents/rich_text.content"))

interface FooterProps extends HTMLAttributes<HTMLElement> {
    data: FooterType
}

export default function Footer({ data, className, ...rest }: FooterProps) {
    return (
        <footer className={Utils.cn("footer p-10 bg-base-200 text-base-content", className)} {...rest}>
            <LayoutContainer className="flex items-start sm:items-center sm:justify-between flex-col sm:flex-row">
                <aside className="flex flex-col gap-y-2 items-start justify-start">
                    <Link href="/">
                        <Image 
                            src={data?.icon?.data?.attributes?.url} width={100} height={100} 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Icon Dinanti"
                            className="w-20 lg:w-28"
                        />
                    </Link>
                    <div className="sm:leading-6 text-[0.7rem] xs:text-xs sm:text-sm">
                        <BlockRendererClient content={data?.description} />
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
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