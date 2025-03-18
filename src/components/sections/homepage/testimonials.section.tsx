"use client";

import { HTMLProps, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import LayoutContainer from '@/containers/layout.container';
import Heading from '@/components/globals/heading.global';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
    const swiperRef: any = useRef(null);

    const t = useTranslations('HomePage');

    const testimonials = [
        { testimony: t('testimony_1'), name: t('testimony_user_1'), image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722372240/dinanti_admin_content/nafi_alif_7b3a244f8e.jpg" },
        { testimony: t('testimony_2'), name: t('testimony_user_2'), image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722371230/dinanti_admin_content/yudha_anggi_1_032bb6b0af.png" },
        { testimony: t('testimony_3'), name: t('testimony_3_user'), image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722365508/dinanti_admin_content/Ayyub_and_Pipit_47fb515584.png" },
    ]

    return (
        <LayoutContainer>
            <section id="testimonial" className="bg-clip-padding backdrop-filter backdrop-blur-md bg-white py-3 glass rounded-md mt-4">
                <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:items-center lg:gap-16">
                        <div className="hidden xxss:block max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <Heading type='subheading' title={t('testimony_heading')} className="font-bold tracking-tight text-gray-900 sm:text-4xl" />

                            <Heading type='text' title={t('testimony_desc')} className="mt-4 text-gray-700" />

                            <ButtonNavigation fowardRef={swiperRef} />
                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            <Swiper
                                effect='coverflow'
                                loop
                                slidesPerView={1}
                                className='-mx-6 lg:col-span-2 lg:mx-0 flex overflow-hidden'
                                pagination={{ el: '.swiper-pagination', clickable: true }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}

                                breakpoints={{
                                    // when window width is <= 640px (mobile)
                                    600: {
                                        slidesPerView: 1.3,
                                    },
                                }}
                            >
                                { testimonials.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <Testimonial data={item} />
                                    </SwiperSlide>
                                )) }

                            </Swiper>
                        </div>
                    </div>

                    <ButtonNavigation fowardRef={swiperRef} className='mt-8 flex justify-center gap-4 lg:hidden' />
                </div>
            </section>
        </LayoutContainer>
    )
}

function Testimonial({ data }: { data: Record<string, string> }) {
    return (
        <blockquote
            className="flex h-full flex-col justify-between bg-white p-6 sm:p-8 lg:p-12 overflow-hidden"
        >
            <div className="">
                {/* <p className="text-2xl font-bold text-NEUTRAL sm:text-3xl">Stayin' Alive</p> */}

                {/* <Heading type='text' title={ data?.testimony } className="mt-4 leading-relaxed text-gray-700" /> */}
                <p>{data?.testimony}</p>
            </div>
            <div className="mt-4 text-sm text-gray-700 sm:mt-6 gap-1 flex items-start flex-col font-semibold sm:text-base">
                    <Image src={data?.image} alt={data.name} width={300} height={300} loading='lazy' className='h-14 w-14 object-cover object-top flex flex-shrink-0 rounded-e-full' />
                &mdash; {data?.name}
            </div>
        </blockquote>
    )
}

function ButtonNavigation({ fowardRef, className }: { fowardRef?: any, className?: HTMLProps<HTMLElement>["className"] }) {
    return (
        <div className={ className ? className : "hidden lg:mt-8 lg:flex lg:gap-4" }>
            <button
                onClick={() => fowardRef?.current?.slidePrev()}
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-NEUTRAL p-3 text-NEUTRAL transition hover:bg-NEUTRAL hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>

            <button
                onClick={() => fowardRef?.current?.slideNext()}
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-NEUTRAL p-3 text-NEUTRAL transition hover:bg-NEUTRAL hover:text-white"
            >
                <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </div>
    )
}