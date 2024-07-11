"use server";

import { notFound } from 'next/navigation'
import { Fetch } from "@/libs/actions/services/fetch.service";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { ThemesDataType } from '@/libs/types/themes.type';
import BlockRendererClient from '@/components/globals/rich_text.global';
import { cookies } from 'next/headers';
import Heading from '@/components/globals/heading.global';
import dynamic from 'next/dynamic';
import Badge from '@/components/micro/badge.micro';
import { Suspense } from 'react';

const TestimonyTheme = dynamic(() => import('@/components/sections/themes/detail/testimonies.theme'), { ssr: false });
const ThemePreview = dynamic(() => import('@/components/sections/themes/detail/preview.theme'), { ssr: false });

export default async function ThemePage({ params }: { params: { slug: string } }) {
    const getLang = cookies().get("lang")?.value ?? "id";

    const data = await Fetch.get<ThemesDataType[]>({ path: GET_THEME_URL(params?.slug) });

    const theme = data[0];

    const isLang = getLang !== "id";

    return (
        <>
            <Link href="/themes" className="mb-5 btn w-fit btn-sm flex items-center gap-x-2 font-semibold bg-MIDNIGHT text-white rounded-full hover:text-NEUTRAL duration-500">
                {getLang !== "id" ? "Themes" : "Tema"} <span><Icon className="text-lg" icon="ion:return-down-back" /></span>
            </Link>

            <section className='relative h-fit bg-white shadow border p-4 lg:p-7 rounded-xl'>
                <div className="flex items-start justify-center flex-col sm:flex-row gap-7 lg:gap-10">
                    {/* Left */}
                    <div className="w-full sm:w-1/3 lg:max-w-96 flex-shrink-0">
                        {theme?.attributes?.cover?.data?.attributes?.url ? (
                            <Image
                                className='w-full h-full object-contain object-center'
                                src={theme?.attributes?.cover?.data?.attributes?.url}
                                alt=''
                                width={1000}
                                height={1000}
                                priority
                            />
                        ) : null}
                    </div>

                    {/* Right */}
                    <div className="w-full h-fit overflow-hidden">
                        <div className='w-full h-fit sticky top-0 right-0'>
                            <Heading title={theme?.attributes?.title} type='subheading' className='xs:text-xl font-semibold' />
                            
                            <div className='flex flex-wrap items-center justify-start gap-2 my-3'>
                                { theme?.attributes?.customers?.data?.length < 5 ? (<Badge label={ isLang ? "new" : "baru" } type='new' />) : null }

                                { theme?.attributes?.badge?.map((item) => (
                                    <Badge key={item?.id} label={item?.type} type={item?.type} icon={item?.icon} />
                                )) }
                            </div>

                            <div className='my-4 text-sm'>
                                <BlockRendererClient content={theme?.attributes?.description} />
                            </div>

                            {/* Preview */}
                            <Suspense>
                                <ThemePreview coverUrl={theme?.attributes?.cover?.data?.attributes?.url} />
                            </Suspense>
                            
                            <Suspense>
                                <div className='flex flex-col items-start justify-center my-7 gap-y-5'>
                                    <p className='lg:text-lg font-semibold'>
                                        {getLang !== "id" ? "Testimonies" : "Testimoni"}
                                        <br />
                                        <span className='font-light text-gray-600 text-xs'>
                                            {getLang !== "id" ? "People Loving This Theme" : "Mereka yang Memakai Tema Ini"}
                                        </span>
                                    </p>

                                    <TestimonyTheme themes={theme?.attributes?.customers?.data} />
                                </div>
                            </Suspense>
                        </div>
                    </div>
                </div>

                {/* Modal Preview */}
                <ModalPreview img={theme?.attributes?.screenshot?.data?.attributes?.url} lang={getLang} />
            </section>
        </>
    )
}

function ModalPreview({ img, lang }: { img: string, lang: string }) {
    return (
        <>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                
                <div className="modal-box max-w-96 w-fit">
                    {/* Btn Close modal */}
                    <label htmlFor="my_modal_7">
                        <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</span>
                    </label>

                    <div className='flex flex-col items-start justify-center pb-4'>
                        <h3 className="text-lg font-medium">Preview {lang !== "id" ? "Theme" : "Tema"}</h3>
                    </div>
                    
                    <Image src={img} loading='lazy' alt='cover' width={1000} height={1000} className='max-w-80 mx-auto rounded-lg shadow' />

                    <label className="btn my-5 w-full bg-MIDNIGHT text-white hover:bg-MIDNIGHT/80" htmlFor="my_modal_7">{lang !== "id" ? "Close" : "Tutup"}</label>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7" />
            </div>
        </>
    )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<any | null> {

    if (!params?.slug) return notFound()

    const data = await Fetch.get<ThemesDataType[]>({ path: GET_THEME_URL(params?.slug) });

    if (data.length < 1) return notFound();

    const theme = data[0];

    if(!theme) return notFound();

    const title = `${theme?.attributes?.title} | Dinanti`;
    const description = theme?.attributes?.description;
    const image = theme?.attributes?.cover?.data?.attributes?.url;

    return {
        title: title,
        description: theme?.attributes?.description,
        openGraph: {
            title: title,
            description: description,
            images: image,
            type: "website",
            siteName: "Dinanti.id",
        },
        twitter: {
            images: image,
            title: title,
            card: "summary_large_image",
            description: description,
            creator: "Dinanti Creator",
        },
    }
}

function GET_THEME_URL(slug: string): string {
    return `/api/themes?filters[slug][$eq]=${slug}&populate[screenshot][fields][0]=url&populate[cover][fields][0]=url&populate[cover][fields][1]=formats&populate[customers][fields][0]=image&populate[customers][fields][1]=name&populate[customers][fields][2]=testimony&populate[customers][populate][image][fields][0]=url&populate[customers][populate][image][fields][1]=formats&populate[badge]=*`;
}