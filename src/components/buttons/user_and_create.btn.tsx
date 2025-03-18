"use client";

import Image from "next/image";
import ButtonCreate from "./oauth.btn";
import { useAuthStore } from "@/libs/actions/stores/auth.store";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { DINANTI } from "@/libs/constants/dinanti.const";

export default function UserAndCreateInviteButton() {
    const router = useRouter()

    const { isLogin, data, clearState } = useAuthStore();

    const t = useTranslations('Navbar');

    const logoutHandle = () => {
        clearState()
        router.replace('/')
    }
 
    return (
        <>
            {!isLogin ? (
                <ButtonCreate
                    is_maintenance={DINANTI.is_maintenance}
                    icon_txt="line-md:plus"
                    title={t('create_btn')}
                    urlMaintenance="/maintenance"
                />
            ) : (
                <div className="flex items-center justify-center">
                    {data?.picture ? (
                        <div className="dropdown dropdown-end">
                            <div className="avatar flex flex-col items-start justify-center" tabIndex={0} role="button">
                                <div className="mask mask-squircle w-8 shadow">
                                    <Image src={data?.picture} alt="avatar" width={1000} height={1000} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white">
                                <li><a className="py-3 hover:text-NEUTRAL hover:font-bold"><Icon icon="material-symbols:dashboard-outline-rounded" />{t('dropdown_dashboard')}</a></li>
                                <li><a className="py-3 hover:text-NEUTRAL hover:font-bold flex justify-between items-center">
                                    <span className="flex items-center justify-center gap-2"><Icon icon="tabler:message" />{t('dropdown_message')}</span>
                                    <span>12 <span className="absolute inline-flex h-1 w-1 animate-ping rounded-full bg-NEUTRAL opacity-75"></span></span>
                                </a></li>

                                <li><a onClick={logoutHandle} className="py-3 hover:font-bold text-rose-700 hover:text-rose-800"><Icon icon="lucide:log-out" />
                                    {t('dropdown_logout')}
                                </a></li>
                            </ul>
                        </div>
                    ) : (
                        <button name="button dashboard" className="btn btn-xs xxs:btn-sm lg:btn-md hover:bg-NEUTRAL/30 duration-500 bg-NEUTRAL text-white group">
                            <span className="group-hover:text-NEUTRAL duration-500">{data?.given_name}</span>
                        </button>
                    )}
                </div>
            )}
        </>
    )
}