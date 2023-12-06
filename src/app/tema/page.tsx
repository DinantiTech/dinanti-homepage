"use client";

import Footer from '@/components/commons/footer.common';
import NavbarCustom from '@/components/commons/navbar.common';
import { Button, NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

import ThemesClassic from '@/assets/images/themes.png';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '800', '900'],
    display: 'swap',
})

export default function Home() {

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
        }
    ]

    return (
        <NextUIProvider>
            <main style={{ backgroundImage: `url("/line.svg")` }} className={`${montserrat.className} w-full bg-cover bg-center bg-no-repeat min-h-screen pb-20`}>
                <NavbarCustom />

                <details>
                    <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10'>

                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <h1 className='font-bold text-3xl'>Tema Undangan Menikah Yang <br /> Kami Buat Untuk Anda Pakai</h1>
                            <p>Berikut tema-tema yang bisa anda pilih untuk  <br /> Anda gunakan di undangan Anda</p>
                        </div>


                        <div className='grid grid-cols-2 gap-7 mt-10'>
                            { themes?.map((data, idx) => (
                                <div key={data.title + "-" + idx} className='relative w-96 h-56 rounded-xl shadow-md shadow-[#D7DCBE] overflow-hidden hover:shadow-xl'>
                                    <Image width={500} height={500} src={data?.img} alt='themes category' />

                                    <div className='w-full h-full bg-[#D7DCBE]/30 absolute top-0 left-0' />

                                    <div className='absolute left-5 bottom-5 flex flex-col items-start justify-center text-left pl-3 gap-y-2'>
                                        <h3 className='font-semibold text-lg'>{data.title}</h3>
                                        <p className='text-sm'>{data.desc}</p>
                                        <Button radius='full' size='sm' className='bg-[#1D1D1D] text-white font-semibold'>Lihat Tema</Button>
                                    </div>
                                </div>
                            )) }

                        </div>
                    </summary>
                </details>

            </main>

            <Footer />
        </NextUIProvider>
    )
}

type TypeProps = {
    title: string;
    desc: string;
    img: any
}