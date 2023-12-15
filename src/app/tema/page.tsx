import { Button } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';

import ThemesClassic from '@/assets/images/themes.png';
import { Metadata, ResolvingMetadata } from 'next';
import Container from '@/components/commons/container.common';

export default function ThemesPage() {

    const themes: TypeProps[] = [
        {
            title: 'Tema Klasik',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
        {
            title: 'Tema Black And White',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
        {
            title: 'Tema Klasik',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
        {
            title: 'Tema Black And White',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
        {
            title: 'Tema Klasik',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
        {
            title: 'Tema Black And White',
            desc: 'Lihat koleksi tema kami yang terus kami kembangkan',
            img: ThemesClassic
        },
    ]

    return (
        <Container>
            <details>
                <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10 pb-20'>

                    <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[40%] sm:w-4/5 w-full'>
                        <h1 className='font-bold md:text-3xl text-2xl'>Tema Undangan Menikah Yang Kami Buat Untuk Anda Pakai</h1>
                        <p className='text-sm sm:text-base'>Berikut tema-tema yang bisa anda pilih untuk Anda gunakan di undangan Anda</p>
                    </div>


                    <div className='grid xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                        {themes?.map((data, idx) => (
                            <div key={data.title + "-" + idx} className='relative group lg:w-[30rem] sm:w-[20rem] lg:h-80 sm:h-60 rounded-xl shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500 bg-white'>
                                <Image width={500} height={500} src={data?.img} alt='themes category' className='xs:ml-20 xxs:ml-12 ml-20' />

                                <div className='w-full h-full bg-black/30 absolute top-0 left-0 group-hover:bg-black/50 duration-500' />

                                <div className='absolute left-0 lg:bottom-8 sm:bottom-4 xxs:bottom-2 bottom-5 flex flex-col items-start justify-center text-left lg:px-8 sm:px-4 xxs:px-2 px-5 gap-y-2'>
                                    <h3 className='font-semibold lg:text-xl sm:text-base text-sm group-hover:text-white duration-500'>{data.title}</h3>
                                    <p className='xs:block xxs:hidden lg:text-base sm:text-sm xs:text-xs text-xs w-60 group-hover:text-white duration-500'>{data.desc}</p>
                                    <Button radius='full' size='sm' className='bg-[#1D1D1D] text-white font-semibold'>Lihat Tema</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </summary>
            </details>
        </Container>
    )
}

type TypeProps = {
    title: string;
    desc: string;
    img: StaticImageData;
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params


    const titleMeta: string = 'Dinanti | Tema: Tema undangan menikah yang kami buat untuk Anda pakai!';

    return {
        title: titleMeta,
        alternates: {
            canonical: '/tema',
        },
        openGraph: {
            title: titleMeta,
            url: '/tema',
            siteName: 'Dinanti',
            //   images: ['/some-specific-page-image.jpg'],
        },
        twitter: {
            title: titleMeta,
            creator: 'Dinanti Creator',
            // images: ['https://nextjs.org/og.png'],
        },
    }
}

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}