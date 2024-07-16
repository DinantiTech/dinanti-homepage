"use server";

import dynamic from "next/dynamic";

import Heading from "@/components/globals/heading.global";
import { Suspense } from "react";
import { ThemesPageDataType } from "@/libs/types/themespage.type";
import { Fetch } from "@/libs/actions/services/fetch.service";
import { ThemesDataListType } from "@/libs/types/themes.type";

const ThemesList = dynamic(() => import("@/components/sections/themes/list_themes.section"));;


export default async function ThemesPageSection({ data }: { data: ThemesPageDataType }) {
    return (
        <section className='w-full h-full flex flex-col items-center justify-center text-center mt-7'>

            <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[60%] sm:w-4/5 w-full'>
                <Heading title={data?.attributes?.heading} type='subheading' />
                <Heading title={data?.attributes?.description} type='text' />
            </div>

            <Suspense>
                <ThemesList />
            </Suspense>
        </section>
    )
}