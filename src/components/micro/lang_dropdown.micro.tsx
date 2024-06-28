"use client";

import { Helpers } from "@/helpers/index,helper";
import StorageUtil from "@/helpers/storage.helper";
import { LocalizationsType } from "@/types/nav.type";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function DrowdownLanguage({ currentLocal, locales }: DrowdownLanguageType) {
    const router = useRouter();
    const changeLanguage = ({ lang }: { lang: string }) => {
        StorageUtil.setItem({ key: "lang", value: lang, type: "cookie" });
        router.refresh();
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost group-hover:text-lime-900 text-lg p-2 hover:bg-white/0">
                <Icon icon="tabler:language" />
                <Icon icon="iconamoon:arrow-down-2-light" className="-ml-2.5" />
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

type DrowdownLanguageType = {
    currentLocal: string;
    locales: LocalizationsType;
}