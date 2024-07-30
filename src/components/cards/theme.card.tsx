"use client"

import { ThemesDataType } from "@/libs/types/themes.type";
import Image from "next/image";
import Link from "next/link";

export default function CardThemeContent({ data }: { data: ThemesDataType }) {
    return (
        <Link href={`/themes/${data?.attributes?.slug}`} className='relative group w-full md:h-80 sm:h-72 h-60 rounded-xl border border-NEUTRAL/50 shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500'>
            <Image
                priority={false}
                loading="lazy"
                width={500}
                height={500}
                src={data?.attributes?.cover?.data?.attributes?.url}
                alt='themes category'
                sizes="100vw"
                className='w-full h-full object-cover aspect-auto object-top' />
        </Link>
    )
}