"use server";

import Heading from "@/components/globals/heading.global";
import { PricingDataType } from "@/libs/types/pricingpage.type";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CardPricing = dynamic(() => import("@/components/cards/pricing.card"), { ssr: true })

export default async function PricingPageSection() {
    const t = await getTranslations('PricingPage');

    const priceList = [
        { title: t("pricelist.free.title"), type: t('pricelist.free.type'), price: t('pricelist.free.price'), discount: t("pricelist.free.discount"), desc: t('pricelist.free.desc'), btn_text: t('pricelist.free.btn_text') },
        { title: t("pricelist.premium.title"), type: t('pricelist.premium.type'), price: t('pricelist.premium.price'), discount: t("pricelist.premium.discount"), desc: t('pricelist.premium.desc'), btn_text: t('pricelist.premium.btn_text') },
    ]

    return (
        <section className='w-full h-full flex flex-col items-center justify-center text-center mt-7 pb-20'>
            <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[60%] sm:w-4/5 w-full md:px-4'>
                <h1 className="font-bold lg:text-3xl xs:text-2xl xxs:text-xl w-full">{t('heading')}</h1>
                <Heading type='text' title={t('heading_desc')} className='sm:text-sm text-xs' />
            </div>

            <div className={`${priceList?.length > 2 ? "lg:grid-cols-3" : null} grid sm:grid-cols-2 grid-cols-1 mt-16 gap-5`}>
                <Suspense>
                    {priceList?.map((data, idx) => (
                        <CardPricing key={idx} data={data} />
                    ))}
                </Suspense>
            </div>
        </section>
    )
}