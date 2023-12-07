import Footer from '@/components/commons/footer.common';
import { Button, NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';

import ThemesClassic from '@/assets/images/themes.png';
import { Metadata, ResolvingMetadata } from 'next';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '800', '900'],
    display: 'swap',
})

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
        <>
            <details>
                <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10 pb-20'>

                    <div className='flex flex-col items-center justify-center gap-y-3'>
                        <h1 className='font-bold text-3xl'>Tema Undangan Menikah Yang <br /> Kami Buat Untuk Anda Pakai</h1>
                        <p>Berikut tema-tema yang bisa anda pilih untuk  <br /> Anda gunakan di undangan Anda</p>
                    </div>


                    <div className='grid grid-cols-2 gap-7 mt-10'>
                        {themes?.map((data, idx) => (
                            <div key={data.title + "-" + idx} className='relative group w-[30rem] h-80 rounded-xl shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl duration-500'>
                                <Image width={500} height={500} src={data?.img} alt='themes category' className='ml-20' />

                                <div className='w-full h-full bg-black/30 absolute top-0 left-0 group-hover:bg-black/50 duration-500' />

                                <div className='absolute left-5 bottom-5 flex flex-col items-start justify-center text-left pl-3 gap-y-2'>
                                    <h3 className='font-semibold text-lg group-hover:text-white duration-500'>{data.title}</h3>
                                    <p className='text-md w-60 group-hover:text-white duration-500'>{data.desc}</p>
                                    <Button radius='full' size='sm' className='bg-[#1D1D1D] text-white font-semibold'>Lihat Tema</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </summary>
            </details>
            <Footer />
        </>
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