"use client";

import Footer from '@/components/commons/footer.common';
import NavbarCustom from '@/components/commons/navbar.common';
import { Button, NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '800', '900'],
    display: 'swap',
})

export default function Home() {
    return (
        <NextUIProvider>
            <main style={{ backgroundImage: `url("/line.svg")` }} className={`${montserrat.className} w-full bg-cover bg-center bg-no-repeat min-h-screen`}>
                <NavbarCustom />
                
                <details>
                    <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10'>

                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <h1 className='font-bold text-3xl'>Harga Paket Beragam Yang <br /> Menyesuaikan Kebutuhanmu</h1>
                            <p>Kamu bisa cobain secara gratis untuk buat undangan <br /> menikah digital dengan klik tombol di bawah ini</p>
                        </div>

                        <div className='flex items-center justify-center mt-7 gap-x-5'>
                            <div className='w-[22rem] bg-[#DBDFC4] flex flex-col items-start justify-between text-left p-5 rounded-2xl h-[17rem]'>
                                <div className='flex flex-col items-start justify-center gap-y-2'>
                                    <h3 className='text-xl font-bold'>Standar</h3>
                                    <h5 className='font-semibold'>Gratis</h5>
                                    <p className='text-sm'>Anda bisa mencoba dan menggunakan seluruh fitur platform kami. Tetapi, Undangan hanya <b>aktif untuk 1 hari</b>. Bila anda merasa cocok, anda bisa upgrade paket anda.</p>
                                </div>


                                <Button name="button" radius="full" className="bg-[#1D1D1D] text-white font-bold text-xs mt-2">
                                    Coba Gratis
                                </Button>
                            </div>

                            <div className='w-[22rem] bg-[#B8BE94] flex flex-col items-start justify-between text-left p-5 rounded-2xl h-[17rem]'>
                                <div className='flex flex-col items-start justify-center gap-y-2'>
                                    <h3 className='text-xl font-bold'>Premium</h3>
                                    <h5 className='font-semibold'>199k</h5>
                                    <p className='text-sm'>Anda mendapatkan seluruh fitur platform kami, undangan aktif selamanya.</p>
                                </div>


                                <Button name="button" radius="full" className="bg-[#1D1D1D] text-white font-bold text-xs">
                                    Coba Premium
                                </Button>
                            </div>
                        </div>
                    </summary>
                </details>

            </main>

            <Footer />
        </NextUIProvider>
    )
}
