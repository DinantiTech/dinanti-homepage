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
import { useTranslations } from 'next-intl';


export default function MainCarousel() {
    const t = useTranslations('HomePage');

    const swiperRef: any = useRef<any>(null);

    const slidersImage = [
        { image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722372240/dinanti_admin_content/nafi_alif_7b3a244f8e.jpg", link: "/themes" },
        { image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722371230/dinanti_admin_content/yudha_anggi_1_032bb6b0af.png", link: "/themes" },
        { image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722365558/dinanti_admin_content/preview_1_cd6a50193f.png", link: "/themes" },
    ]

    return (
        <section className="flex flex-col items-center justify-center w-full">
            <Swiper
                effect='coverflow'
                loop
                slidesPerView={1}
                coverflowEffect={
                    { rotate: 0, stretch: -10, depth: 80, modifier: 2.5 }
                }
                modules={[EffectCoverflow, Pagination]}
                className='lg:w-[48rem] sm:w-[35rem] w-56 relative'
                pagination={{ el: '.swiper-pagination', clickable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}

                breakpoints={{
                    // when window width is <= 640px (mobile)
                    // 370: {
                    //     slidesPerView: 3,
                    // },
                    // 400: {
                    //     slidesPerView: 3,
                    // },
                    500: {
                        slidesPerView: 3,
                        coverflowEffect: {
                            stretch: -20,
                        }
                    }
                }}
            >
                {slidersImage?.map((data, idx) => (
                    <SwiperSlide key={idx} className='rounded-2xl overflow-hidden'>
                        <div className='aspect-[10/14] relative flex flex-col items-center justify-center'>
                            <Image loading='lazy' src={data.image} sizes='100vw' width={2000} height={2000} alt='preview 2' className='w-full h-full object-cover object-center' />


                            <Link prefetch={false} href={data?.link} target='_blank' className='absolute bottom-3 w-full px-4'>
                                <p className='btn btn-xs xxs:btn-sm sm:btn-md font-semibold duration-700 hover:bg-gray-800 text-white bg-MIDNIGHT w-full rounded-full text-[0.5rem] xs:text-xs sm:text-sm md:text-base'>{t('view_theme')}</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

                <div className='flex gap-x-28 items-center justify-center mt-12'>
                    <div className='swiper-pagination' />
                </div>
            </Swiper>
        </section>
    )
}