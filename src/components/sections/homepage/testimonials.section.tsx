"use client";

import { HTMLProps, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import LayoutContainer from '@/containers/layout.container';
import Heading from '@/components/globals/heading.global';
import Image from 'next/image';
import { TestimoniesType, TestimonySectionType } from '@/libs/types/homepage.type';
import { CustomerDataType } from '@/libs/types/customers.type';
import BlockRendererClient from '@/components/globals/rich_text.global';

export default function TestimonialsSection({ data }: {data: TestimonySectionType}) {
    const swiperRef: any = useRef();

    return (
        <LayoutContainer>
            <section id="testimonial" className="bg-clip-padding backdrop-filter backdrop-blur-md bg-white py-3 glass rounded-md mt-4">
                <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:items-center lg:gap-16">
                        <div className="hidden xxss:block max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <Heading type='subheading' title={data?.heading} className="font-bold tracking-tight text-gray-900 sm:text-4xl" />

                            <Heading type='text' title={data?.description} className="mt-4 text-gray-700" />

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
                                { data?.customers?.data?.map(item => (
                                    <SwiperSlide key={item?.id}>
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

function Testimonial({ data }: { data: CustomerDataType }) {
    return (
        <blockquote
            className="flex h-full flex-col justify-between bg-white p-6 sm:p-8 lg:p-12 overflow-hidden"
        >
            <div className="">
                {/* <p className="text-2xl font-bold text-NEUTRAL sm:text-3xl">Stayin' Alive</p> */}

                {/* <Heading type='text' title={ data?.testimony } className="mt-4 leading-relaxed text-gray-700" /> */}
                <BlockRendererClient content={data?.attributes?.testimony} />
            </div>
            <footer className="mt-4 text-sm text-gray-700 sm:mt-6 gap-1 flex items-start flex-col font-semibold sm:text-base">
                { data?.attributes?.image?.data?.attributes?.url ? (
                    <Image src={data?.attributes?.image?.data?.attributes?.url} alt={data?.attributes?.name} width={300} height={300} loading='lazy' className='h-14 w-14 object-cover object-top flex flex-shrink-0 rounded-e-full' />
                ) :null }
                &mdash; {data?.attributes?.name}
            </footer>
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