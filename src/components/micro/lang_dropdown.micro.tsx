"use client";

import useLanguageStore from "@/libs/actions/stores/lang.store";
import { DINANTI } from "@/libs/constants/dinanti.const";
import { Helpers } from "@/libs/helpers/index,helper";
import { Utils } from "@/libs/utils/index.util";
import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";

export default function DrowdownLanguage({ className, ...rest }: DrowdownLanguageType) {
    
    const { lang, setLanguage } = useLanguageStore()

    return (
        <div className={Utils.cn("dropdown dropdown-end justify-center items-center", className)} { ...rest }>
            <div tabIndex={0} role="button" className="btn btn-xs xxs:btn-sm lg:btn-md btn-ghost group-hover:text-lime-900 text-sm xxs:text-base lg:text-xl hover:bg-white/0 border-none border-lime-900/20 items-center justify-center mx-auto">
                <Icon icon="tabler:language" />
                <Icon icon="iconamoon:arrow-down-2-light" className="-ml-2.5 hidden xs:block" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border-2 border-lime-900/10 h-fit max-h-56">
                <li className="w-full btn btn-ghost flex flex-row items-center justify-start text-left">
                    <span className="p-1 border border-MIDNIGHT">{lang?.toLowerCase()}</span>
                    {Helpers.getCountryByCode(lang)?.name}
                </li>
                {
                    DINANTI.lang?.filter(val => val?.code !== lang).map((item, idx) => (
                        <li key={idx} onClick={() => setLanguage(item?.code)} className="w-full btn btn-ghost flex flex-row items-center justify-start text-left">
                            <span className="p-1 border border-MIDNIGHT">{item?.code?.toLowerCase()}</span>
                            {Helpers.getCountryByCode(item?.code)?.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

interface DrowdownLanguageType extends HTMLAttributes<HTMLDivElement> {}