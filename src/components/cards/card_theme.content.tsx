"use client";

import { CardThemesListType } from "@/types/themespage.type";
import Image from "next/image";

export default function CardThemeContent({ data }: { data: CardThemesListType }) {
    return (
        <div className='relative group lg:w-[30rem] sm:w-[20rem] lg:h-80 sm:h-60 rounded-xl shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500 bg-white'>
            <Image loading="lazy" width={500} height={500} src={data?.image?.data?.attributes?.url} alt='themes category' sizes="100vw" className='w-full h-full object-cover' />

            <div className='w-full h-full bg-black/50 absolute top-0 left-0 group-hover:bg-black/10 duration-500 glass' />

            <div className='absolute left-0 lg:bottom-8 sm:bottom-4 xxs:bottom-2 bottom-5 flex flex-col items-start justify-center text-left lg:px-8 sm:px-4 xxs:px-2 px-5 gap-y-2'>
                <h3 className='font-semibold lg:text-xl sm:text-base text-sm text-white group-hover:text-black duration-500'>{data.title}</h3>
                <p className='xs:block xxs:hidden lg:text-base sm:text-sm xs:text-xs text-xs w-60 text-white group-hover:text-black duration-500'>{data.description}</p>
                <button className='bg-[#1D1D1D] text-white font-semibold border-2 border-gray-100'>{data?.btn_text}</button>
            </div>
        </div>
    )
}