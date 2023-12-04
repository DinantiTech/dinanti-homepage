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
        <section className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center gap-y-4">
                <h1 className="font-bold text-2xl">Dibuat Khusus Untuk Anda Dengan <br />Berbagai Fitur</h1>
                <p className="text-sm">Kamu bisa cobain secara gratis untuk buat undangan <br /> menikah digital dengan klik tombol di bawah ini</p>

                <Button radius="full" color="default" className="bg-[#1D1D1D] text-white font-semibold">
                    Coba Gratis
                </Button>
            </div>


            <div className="flex items-center justify-center gap-x-5 mt-14">
                {dataCards?.map((data, idx) => (
                    <div key={`${data?.title}-${idx}`} className="flex flex-col items-start text-left px-5 pt-32 bg-[#EDEFE2] rounded-lg w-64 h-72 relative">

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