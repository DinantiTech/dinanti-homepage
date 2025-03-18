"use client"

import Image from "next/image";
import Link from "next/link";

export default function CardThemeContent({ data }: { data: Record<string, string> }) {
    return (
        <Link href={`/themes/${data?.slug}`} className='relative group w-full md:h-80 sm:h-72 h-60 rounded-xl border border-NEUTRAL/50 shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500'>
            <Image
                priority={false}
                loading="lazy"
                width={500}
                height={500}
                src={data?.cover}
                alt='themes category'
                sizes="100vw"
                className='w-full h-full object-cover aspect-auto object-top' />
        </Link>
    )
}