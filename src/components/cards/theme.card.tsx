"use client"

import { ThemesDataType } from "@/libs/types/themes.type";
import Image from "next/image";
import Link from "next/link";

export default function CardThemeContent({ data }: { data: ThemesDataType }) {
    return (
        <Link href={`/themes/${data?.attributes?.slug}`} target="_blank" className='relative group w-full md:h-80 sm:h-72 h-60 rounded-xl shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500'>
            <Image
                loading="lazy"
                width={500}
                height={500}
                src={data?.attributes?.cover?.data?.attributes?.url}
                alt='themes category'
                sizes="100vw"
                className='w-full h-full object-cover aspect-auto object-top' />

            <div className='w-full h-full bg-black/90 opacity-60 absolute top-0 left-0 group-hover:bg-black/0 group-hover:opacity-50 duration-500 glass' />

            <div className='absolute left-0 lg:bottom-8 sm:bottom-4 xxs:bottom-2 bottom-5 flex flex-col items-start justify-center text-left lg:px-8 sm:px-4 xxs:px-2 px-5 gap-y-2'>

                <h3 className='font-semibold lg:text-xl sm:text-base text-sm text-white duration-500'>
                    {data.attributes?.title}
                </h3>
            </div>
        </Link>
    )
}