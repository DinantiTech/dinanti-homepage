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
import Badge from '@/components/micro/badge.micro';
import { Suspense } from 'react';
import { DataNavigationsType } from '@/libs/types/nav.type';
import ThemePreview from '@/components/sections/themes/detail/preview.theme';
import TestimonyTheme from '@/components/sections/themes/detail/testimonies.theme';

import themesList from "@/json/themes.json";
import whatsapp_redirect from '@/libs/helpers/whatsapp_redirect.helper';

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params;

    const getLang = JSON.parse((await cookies()).get("lang")?.value ?? '"id"');

    const isLang = getLang !== "id";
    
    const themeDetail = themesList?.themes?.find(val => val?.slug === slug);

    return (
        <>
            <Link href="/themes" className="mb-5 btn w-fit btn-sm flex items-center gap-x-2 font-semibold bg-MIDNIGHT text-white rounded-full hover:text-NEUTRAL duration-500">
                { isLang ? "Themes" : "Tema"} <span><Icon className="text-lg" icon="ion:return-down-back" /></span>
            </Link>

            <section className='relative h-fit bg-white shadow border p-4 lg:p-7 rounded-xl'>
                <div className="flex items-start justify-center flex-col sm:flex-row gap-7 lg:gap-10">
                    {/* Left */}
                    <div className="w-full sm:w-1/3 lg:max-w-96 flex-shrink-0">
                        {themeDetail?.cover ? (
                            <Image
                                className='w-full h-full object-contain object-center'
                                src={themeDetail?.cover}
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
                            <Heading title={themeDetail?.title!} type='subheading' className='xs:text-xl font-semibold' />
                            
                            <div className='flex flex-wrap items-center justify-start gap-2 my-3'>
                                {/* { (theme?.attributes?.customers?.data?.length < 5 || !theme?.attributes?.customers?.data?.length) ? (<Badge label={ isLang ? "new" : "baru" } type='new' />) : null } */}

                                { themeDetail?.badge?.map((item, idx) => (
                                    <Badge key={idx} label={item} type={item} />
                                )) }
                            </div>

                            <div className='my-4 text-sm'>
                                <p>{themeDetail?.desc.id}</p>
                            </div>

                            {/* Preview */}
                            <Suspense>
                                <ThemePreview coverUrl={themeDetail?.cover!} />
                            </Suspense>
                            
                            {/* Testimony */}
                            {/* <Suspense>
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
                            </Suspense> */}
                        </div>
                    </div>
                </div>

                {/* Modal Preview */}
                <ModalPreview img={themeDetail?.layout!} lang={getLang} />

                {/* Order button */}
                <div className='fixed lg:bottom-20 bottom-10 lg:right-20 right-10 text-NEUTRAL'>
                    <Link href={whatsapp_redirect({ number: "6285722440592", code: themeDetail?.code! })} target='_blank' className='flex items-center justify-center btn bg-MIDNIGHT text-PRIMARY duration-500 hover:text-MIDNIGHT'>
                        <Icon icon="bi:envelope-paper-heart-fill" className='text-lg' />
                        { isLang ? "Order Now": "Pesan Sekarang" }
                    </Link>
                </div>
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

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<any | null> {
    const params = await props.params;

    if (!params?.slug) return notFound()

    const themeDetail = themesList?.themes?.find(val => val?.slug === params.slug);

    if(!themeDetail) return notFound()

    const title = `${themeDetail?.title}| Dinanti`;
    const description = themeDetail.desc.id;
    const image = themeDetail.cover;

    return {
        title: title,
        description: description,
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