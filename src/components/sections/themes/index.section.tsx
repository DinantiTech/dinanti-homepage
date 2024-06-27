import dynamic from "next/dynamic";

import Heading from "@/components/commons/heading.common";
import { ThemesPageDataType } from "@/types/themespage.type";
import { Suspense } from "react";

const CardThemeContent = dynamic(() => import("@/components/cards/theme.card"), { ssr: true });

export default function ThemesPageSection({ data }: { data: ThemesPageDataType }) {
    return (
        <section className='w-full h-full flex flex-col items-center justify-center text-center mt-7 pb-20'>

            <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[60%] sm:w-4/5 w-full'>
                <Heading title={data?.attributes?.heading} type='subheading' />
                <Heading title={data?.attributes?.description} type='text' />
            </div>


            <div className='grid lg:grid-cols-3 xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                {data?.attributes?.themes_list?.map((data) => (
                    <Suspense key={data?.id}>
                        <CardThemeContent data={data} />
                    </Suspense>
                ))}
            </div>
        </section>
    )
}