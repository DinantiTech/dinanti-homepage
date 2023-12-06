"use client";

import Footer from '@/components/commons/footer.common';
import NavbarCustom from '@/components/commons/navbar.common';
import { NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';

import BlogsImage from "@/assets/images/blogs_image.png";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '800', '900'],
    display: 'swap',
})

export default function Home() {
    const dataBlogs: TypeDataBlogs[] = [
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage
        }
    ]

    return (
        <NextUIProvider>
            <main style={{ backgroundImage: `url("/line.svg")` }} className={`${montserrat.className} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
                <NavbarCustom />
                
                <details>
                    <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10'>

                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <h1 className='font-bold text-3xl'>Kumpulan Blog Kami</h1>
                            <p>Kumpulan blog-blog yang bisa anda baca</p>
                        </div>

                        <div className='flex items-center justify-center mt-7 gap-x-5 pb-20'>
                            <div className='grid grid-cols-4 gap-5 max-w-[1024px] w-full'>
                                { dataBlogs?.map((data, idx) => (
                                    <div key={data.title + "-" + idx} className='rounded-xl shadow-md shadow-[#D7DCBE] flex flex-col items-center justify-start overflow-hidden bg-white hover:cursor-pointer hover:shadow-lg'>
                                        <Image src={data.img} alt='' width={500} height={500} className='w-full h-1/2 top-0 object-cover object-center' />

                                        <div className='flex flex-col items-center justify-center mt-3 px-2'>
                                            <span className='text-xs text-gray-600'>{data.date}</span>
                                            <p className='text-sm font-semibold'>{data.title}</p>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </summary>
                </details>

            </main>

            <Footer />
        </NextUIProvider>
    )
}

type TypeDataBlogs = {
    title: string;
    date: string;
    img: StaticImageData;
}
