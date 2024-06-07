"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRef } from 'react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

import Container from "../commons/container.common";
import Image1 from "@/assets/previews/preview_1.png";
import Image2 from "@/assets/previews/preview_2.png";

export default function MainCarousel() {
    const swiperRef: any = useRef();

    return (
        <Container>
            <div className="flex flex-col items-center justify-center w-full">
                <Swiper
                    effect='coverflow'
                    centeredSlides
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
                        640: {
                          slidesPerView: 3,
                        },
                      }}
                >
                    <SwiperSlide className='rounded-2xl overflow-hidden'>
                        <div className='w-full h-full relative flex flex-col items-center justify-center'>
                            <Image priority src={Image2} alt='preview 1' className='w-full' />

                            <div className='absolute bottom-3 w-full px-4'>
                                <Button radius='full' fullWidth className='font-semibold text-white bg-[#1D1D1D]'>Lihat Tema</Button>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='rounded-2xl overflow-hidden'>
                        <div className='w-full h-full relative flex flex-col items-center justify-center'>
                            <Image priority src={Image1} alt='preview 2' className='w-full' />

                            <div className='absolute bottom-3 w-full px-4'>
                                <Button radius='full' fullWidth className='font-semibold text-white bg-[#1D1D1D]'>Lihat Tema</Button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='rounded-2xl overflow-hidden'>
                        <div className='w-full h-full relative flex flex-col items-center justify-center'>
                            <Image priority src={Image1} alt='preview 1' className='w-full' />

                            <div className='absolute bottom-3 w-full px-4'>
                                <Button radius='full' fullWidth className='font-semibold text-white bg-[#1D1D1D]'>Lihat Tema</Button>
                            </div>
                        </div>

                    </SwiperSlide>


                    <div className='flex gap-x-28 items-center justify-center mt-12'>
                        <div className='swiper-pagination' />
                    </div>
                </Swiper>
            </div>
        </Container>
    )
}