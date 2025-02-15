"use server";

import { Icon } from "@iconify/react";
import { cookies } from "next/headers";
import Image from "next/image";

import LogoDinanti from "@/assets/logo/logo_slogan.svg";
import { DataNavigationsType } from "@/libs/types/nav.type";
import { Fetch } from "@/libs/actions/services/fetch.service";
import Link from "next/link";

export default async function Maintenance() {
    const getLang = JSON.parse(cookies().get("lang")?.value ?? '"id"');

    const isLang = getLang !== "id";

    const data = await Fetch.get<DataNavigationsType>({ path: `/api/navigation?populate=deep&locale=${getLang}` })

    return (
        <section className="w-full flex items-center justify-center flex-col text-center gap-y-10">
            <div className="flex flex-col items-center justify-center gap-y-4 px-5">
                <Image src={LogoDinanti} alt='icon logo' width={500} height={500} className="w-56" />
            </div>
            <h1 className="flex flex-col items-center justify-center gap-y-4 px-5">
                <span className="font-bold lg:text-5xl sm:text-3xl text-2xl lg:w-[70%] sm:w-[80%] w-full">
                    {`${isLang ? "We apologize": "Mohon maaf"}`} 🙏
                    <br></br>
                    { isLang ? "We're doing some repairs!": "lagi dibenerin dulu, nih!" }
                </span>
                <span className="text-lg sm:px-0 lg:w-[70%] sm:w-[80%] w-full">
                    { isLang 
                        ? "Hello 👋 We're tweaking our website to make it even cooler and faster. Please be patient, this won't take long. Thanks so much for your understanding!"
                        : "Halo 👋 kami lagi ngoprek website biar makin kece dan anti lemot. Harap bersabar ya, ini cuma sebentar kok. Makasih banget buat pengertiannya!"
                     }
                </span>
            </h1>
            { data?.attributes?.contact_admin ? (
                <div className="flex flex-col items-center justify-center gap-y-4 px-5 backdrop-blur-sm bg-[#F0EEEE]/40 glass py-8 rounded-2xl w-[22rem]">
                    <div className="flex flex-col items-center justify-center gap-y-1">
                        <h2 className="font-bold lg:text-2xl sm:text-xl text-lg ">
                            { isLang ? "Want an invite?": "Lagi Butuh Undangan?" }
                        </h2>
                        <p className="text-sm sm:px-0 ">
                            { isLang ? "Hit the button below to get in touch": "Klik tombol di bawah buat langsung hubungi kami" }
                        </p>
                    </div>
                    <Link href={data?.attributes?.contact_admin?.link} target="_blank" color="default" className="bg-[#1D1D1D] text-white font-semibold btn rounded-full">
                        <Icon icon="ic:baseline-whatsapp" className="text-2xl text-white pointer-events-none flex-shrink-0" />
                        { isLang ? "Let's chat!": "Yuk, Ngobrol!" }
                    </Link>
                </div>
            ): null }
        </section>
    )
}