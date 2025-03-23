import { Pacifico } from 'next/font/google';

import BATIK_IMAGE from "@/assets/images/bg-batik-center.png";

const pacifico = Pacifico({
    display: "swap",
    weight: '400',
    subsets: ["latin"]
})

import ProtectionRoute from "@/components/globals/route_protection.global";
import Image from 'next/image';

export default function CustomInviteForm() {
    return (
        <ProtectionRoute>
            <div className="w-full h-fit bg-white shadow border-ACCENT rounded-lg p-7 flex flex-col items-center gap-7">
                <h2 className={`${pacifico.className} text-center text-NEUTRAL text-xl sm:text-3xl`}>Daftar Harga</h2>
                <div className="flex flex-col md:flex-row w-full">

                    <div className="card w-full bg-SECONDARY rounded-box grid h-fit flex-grow place-items-center px-9 py-3">
                        <div className='z-20 py-3'>
                            <h4 className={`${pacifico.className} text-NEUTRAL text-center pb-3 text-lg sm:text-xl`}>Template</h4>

                            <ul className='list-disc text-xs sm:text-sm flex flex-col items-start gap-1.5'>
                                <li>Menggunakan tema undangan yang sudah ada*</li>
                                <li>Custom subdomain <span className='text-xs text-NEUTRAL font-semibold italic'>(contoh: namaanda-pasangan.dinanti.com)</span></li>
                                <li>Fitur RSVP kehadiran dan harapan</li>
                                <li>Ngamplop digital (opsional)</li>
                                <li>Revisi major 1x</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${pacifico.className} divider divider-vertical md:divider-horizontal text-sm text-NEUTRAL`}>Atau</div>

                    <div className="card w-full bg-SECONDARY rounded-box grid flex-grow place-items-center relative overflow-hidden px-9 py-3">

                        <div className='z-20 py-3'>
                            <h4 className={`${pacifico.className} text-NEUTRAL text-center pb-3 text-lg sm:text-xl`}>Custom</h4>

                            <ul className='list-disc text-xs sm:text-sm flex flex-col items-start gap-1.5'>
                                <li>Custom desain undangan <span className='text-xs text-NEUTRAL font-semibold italic'>(bisa memodifikasi tema yang ada atau membuat dari nol dengan bantuan tim desain kami)</span></li>
                                <li>Custom subdomain <span className='text-xs text-NEUTRAL font-semibold italic'>(contoh: namaanda-pasangan.dinanti.com)</span></li>
                                <li>Fitur RSVP kehadiran dan harapan</li>
                                <li>Ngamplop digital (opsional)</li>
                                <li>Request tambahan <span className='text-xs text-NEUTRAL font-semibold italic'>(contoh: animasi, fitur khusus, dll. – dengan fee tambahan)</span></li>
                                <li>Revisi major 3x</li>
                            </ul>
                        </div>


                        <Image src={BATIK_IMAGE} alt='BATIK_IMAGE' className='absolute -bottom-11 -right-11 object-cover object-center z-0 w-36 opacity-45' />
                    </div>

                </div>
            </div>
        </ProtectionRoute>
    )
}