import { Button } from "@nextui-org/react";

import MessageIcon from "@/assets/icons/message.svg";
import ThemesIcon from "@/assets/icons/themes.svg";
import MoneyIcon from "@/assets/icons/money.svg";
import DomainIcon from "@/assets/icons/subdomain.png";
import Image from "next/image";
import { FeatureType } from "@/types/homepage.type";

interface IDataCards {
    title: string;
    desc: string;
    icon: string;
}

export default function FeatureSection({feature}: { feature: FeatureType }) {

    const dataCards: IDataCards[] = [
        { title: 'Beragam Tema', desc: 'Kami sediakan beragam tema yang bisa dipilih.', icon: ThemesIcon },
        { title: 'Kirim Ucapan', desc: 'Tamu undangan bisa mengirim pesan secara online.', icon: MessageIcon },
        { title: 'Uang Sumbangan', desc: 'Ada fitur untuk mengirim uang sumbangan pernikahan.', icon: MoneyIcon },
        { title: 'Custom Domain', desc: 'Bisa buat custom domain untuk alamat undangan digital', icon: DomainIcon },
    ]

    return (
        <div className="flex flex-col items-center justify-center text-center lg:mt-20 sm:mt-14 mt-10">
            <div className="flex flex-col items-center justify-center gap-y-4 px-5">
                <h1 className="font-bold lg:text-3xl sm:text-2xl text-xl lg:w-[70%] sm:w-[80%] w-full">{feature?.title}</h1>
                <p className="text-sm sm:px-0 lg:w-[70%] sm:w-[80%] w-full">{feature?.description}</p>

                <Button radius="full" color="default" className="bg-[#1D1D1D] text-white font-semibold">
                    {feature?.btn_text}
                </Button>
            </div>


            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-14">
                {feature?.list_features?.map((data, idx) => (
                    <div key={`${data?.id}-${idx}`} className="flex flex-col items-start text-left gap-2 px-5 lg:pt-28 sm:pt-24 pt-20 bg-[#EDEFE2] rounded-lg w-64 sm:h-[15rem] h-[13.5rem] relative">

                        <div className="absolute w-9 h-9 p-2 top-5 left-5 rounded bg-[#D7DCBE]">
                            <Image src={data.icon?.data?.attributes?.url} alt={`icon ${data.name}`} fill />
                        </div>

                        <h3 className="font-semibold">{data?.name}</h3>
                        <p className="text-sm">{data?.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}