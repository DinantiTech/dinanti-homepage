"use server";

import dynamic from "next/dynamic";

import Heading from "@/components/globals/heading.global";
import { Suspense } from "react";
import ListThemes from "@/components/sections/themes/list_themes.section";
import { getTranslations } from "next-intl/server";


export default async function ThemesPageSection() {
    const t = await getTranslations('ThemesPage');

    return (
        <section className='w-full h-full flex flex-col items-center justify-center text-center mt-7'>

            <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[60%] sm:w-4/5 w-full'>
                <h1 className="font-bold lg:text-3xl xs:text-2xl xxs:text-xl w-full">{t('heading')}</h1>
                <Heading title={t('heading_desc')} type='text' />
            </div>

            <Suspense fallback={<span>Rendering...</span>}>
                <ListThemes />
            </Suspense>
        </section>
    )
}