"use client";

import { Helpers } from "@/libs/helpers/index,helper";
import StorageUtil from "@/libs/helpers/storage.helper";
import { LocalizationsType } from "@/libs/types/nav.type";
import { Utils } from "@/libs/utils/index.util";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

export default function DrowdownLanguage({ currentLocal, locales, className, ...rest }: DrowdownLanguageType) {
    const router = useRouter();
    const changeLanguage = ({ lang }: { lang: string }) => {
        StorageUtil.setItem({ key: "lang", value: lang, type: "cookie" });
        router.refresh();
    }

    return (
        <div className={Utils.cn("dropdown dropdown-end justify-center items-center", className)} { ...rest }>
            <div tabIndex={0} role="button" className="btn btn-xs xxs:btn-sm lg:btn-md btn-ghost group-hover:text-lime-900 text-sm xxs:text-base lg:text-xl hover:bg-white/0 border-none border-lime-900/20 items-center justify-center mx-auto">
                <Icon icon="tabler:language" />
                <Icon icon="iconamoon:arrow-down-2-light" className="-ml-2.5 hidden xs:block" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border-2 border-lime-900/10 h-fit max-h-56">
                <li className="w-full btn btn-ghost flex flex-row items-center justify-start text-left">
                    <span className="p-1 border border-MIDNIGHT">{currentLocal?.toLowerCase()}</span>
                    {Helpers.getCountryByCode(currentLocal)?.name}
                </li>
                {
                    locales?.data?.map(item => (
                        <li key={item?.id} onClick={async () => await changeLanguage({ lang: item?.attributes?.locale })} className="w-full btn btn-ghost flex flex-row items-center justify-start text-left">
                            <span className="p-1 border border-MIDNIGHT">{item?.attributes?.locale?.toLowerCase()}</span>
                            {Helpers.getCountryByCode(item?.attributes?.locale)?.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

interface DrowdownLanguageType extends HTMLAttributes<HTMLDivElement> {
    currentLocal: string;
    locales: LocalizationsType;
}