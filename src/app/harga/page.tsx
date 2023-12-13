import Footer from '@/components/commons/footer.common';
import { Button } from '@nextui-org/react';
import { Metadata, ResolvingMetadata } from 'next';

export default function PricingPage() {
    return (
        <details>
            <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10 pb-20'>

                <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[40%] sm:w-4/5 w-full'>
                    <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl'>Harga Paket Beragam Yang Menyesuaikan Kebutuhanmu</h1>
                    <p className='px-6 sm:text-sm text-xs'>Kamu bisa cobain secara gratis untuk buat undangan menikah digital dengan klik tombol di bawah ini</p>
                </div>

                <div className='grid sm:grid-cols-2 grid-cols-1 mt-16 gap-5'>
                    <div className='lg:w-[22rem] sm:w-[20rem] w-[18rem] bg-[#DBDFC4] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]'>
                        <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                            <h3 className='text-xl font-bold'>Standar</h3>
                            <h5 className='font-semibold'>Gratis</h5>
                            <p className='sm:text-sm text-xs py-4'>Anda bisa mencoba dan menggunakan seluruh fitur platform kami. Tetapi, Undangan hanya <b>aktif untuk 1 hari</b>. Bila anda merasa cocok, anda bisa upgrade paket anda.</p>
                        </div>


                        <Button name="button" radius="full" fullWidth className="bg-[#1D1D1D] text-white mx-auto font-bold text-xs mt-2">
                            Coba Gratis
                        </Button>
                    </div>

                    <div className='lg:w-[22rem] sm:w-[20rem] w-[18rem] bg-[#B8BE94] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]'>
                        <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                            <h3 className='text-xl font-bold'>Premium</h3>
                            <h5 className='font-semibold'>199k</h5>
                            <p className='sm:text-base text-sm py-4'>Anda mendapatkan seluruh fitur platform kami, undangan aktif selamanya.</p>
                        </div>


                        <Button name="button" radius="full" fullWidth className="bg-[#1D1D1D] text-white mx-auto font-bold text-xs sm:mt-0 mt-2">
                            Coba Premium
                        </Button>
                    </div>
                </div>
            </summary>
        </details>
    )
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params

    const titleMeta: string = "Dinanti | Harga: Lihat harga yang kami tawarkan!";

    return {
        title: titleMeta,
        alternates: {
            canonical: '/harga',
        },
        openGraph: {
            title: titleMeta,
            url: '/harga',
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
