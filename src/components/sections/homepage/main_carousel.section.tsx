"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { SliderType } from '@/libs/types/homepage.type';


export default function MainCarousel({ sliders }: { sliders?: SliderType[] }) {
    const swiperRef: any = useRef();
    return (
        <section className="flex flex-col items-center justify-center w-full">
            {sliders ? (
                <Swiper
                    effect='coverflow'
                    loop
                    slidesPerView={1}
                    coverflowEffect={
                        { rotate: 0, stretch: -20, depth: 80, modifier: 2.5 }
                    }
                    modules={[EffectCoverflow, Pagination]}
                    className='lg:w-[48rem] sm:w-[35rem] w-52 relative'
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}

                    breakpoints={{
                        // when window width is <= 640px (mobile)
                        600: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {sliders?.map((data) => (
                        <SwiperSlide key={data?.id} className='rounded-2xl overflow-hidden'>
                            <div className='aspect-[10/14] relative flex flex-col items-center justify-center'>
                                {data?.btn_text ? (
                                    <>
                                        <Image loading='lazy' src={data?.image?.data?.attributes?.url} sizes='100vw' width={7000} height={7000} alt='preview 2' className='w-full h-full object-cover object-center' />

                                        <Link prefetch={false} href={data?.url} target='_blank' className='absolute bottom-3 w-full px-4'>
                                            <p className='btn btn-sm xs:btn-md font-semibold duration-700 hover:bg-gray-800 text-white bg-MIDNIGHT w-full rounded-full'>{data?.btn_text}</p>
                                        </Link>
                                    </>
                                ) : (
                                    <Link prefetch={false} href={data?.url} target='_blank' className='w-full h-full'>
                                        <Image loading='lazy' src={data?.image?.data?.attributes?.url} sizes='100vw' width={7000} height={7000} alt='preview 2' className='w-full h-full object-cover object-center' />
                                    </Link>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className='flex gap-x-28 items-center justify-center mt-12'>
                        <div className='swiper-pagination' />
                    </div>
                </Swiper>
            ) : null}
        </section>
    )
}