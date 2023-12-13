import { Button } from "@nextui-org/react";

import MessageIcon from "@/assets/icons/message.svg";
import ThemesIcon from "@/assets/icons/themes.svg";
import MoneyIcon from "@/assets/icons/money.svg";
import DomainIcon from "@/assets/icons/subdomain.png";
import Image from "next/image";

interface IDataCards {
    title: string;
    desc: string;
    icon: string;
}

export default function FeatureSection() {

    const dataCards: IDataCards[] = [
        { title: 'Beragam Tema', desc: 'Kami sediakan beragam tema yang bisa dipilih.', icon: ThemesIcon },
        { title: 'Kirim Ucapan', desc: 'Tamu undangan bisa mengirim pesan secara online.', icon: MessageIcon },
        { title: 'Uang Sumbangan', desc: 'Ada fitur untuk mengirim uang sumbangan pernikahan.', icon: MoneyIcon },
        { title: 'Custom Domain', desc: 'Bisa buat custom domain untuk alamat undangan digital', icon: DomainIcon },
    ]

    return (
        <section className="flex flex-col items-center justify-center text-center lg:mt-20 sm:mt-14 mt-10">
            <div className="flex flex-col items-center justify-center gap-y-4">
                <h1 className="font-bold text-2xl w-5/6">Dibuat Khusus Untuk Anda Dengan <span>Berbagai Fitur</span></h1>
                <p className="text-sm sm:px-0 px-4">Kamu bisa cobain secara gratis untuk buat undangan <br /> menikah digital dengan klik tombol di bawah ini</p>

                <Button radius="full" color="default" className="bg-[#1D1D1D] text-white font-semibold">
                    Coba Gratis
                </Button>
            </div>


            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-14">
                {dataCards?.map((data, idx) => (
                    <div key={`${data?.title}-${idx}`} className="flex flex-col items-start text-left gap-2 px-5 lg:pt-28 sm:pt-24 pt-20 bg-[#EDEFE2] rounded-lg w-64 sm:h-[15rem] h-[13.5rem] relative">

                        <div className="absolute w-9 h-9 p-2 top-5 left-5 rounded bg-[#D7DCBE]">
                            <Image src={data.icon} alt={`icon ${data.title}`} fill />
                        </div>

                        <h3 className="font-semibold">{data?.title}</h3>
                        <p className="text-sm">{data?.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}