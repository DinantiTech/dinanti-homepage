"use client";

import Image from "next/image";
import Link from "next/link";

import Heading from "../../globals/heading.global";
import { useTranslations } from "next-intl";

export default function FeatureSection() {
    const t = useTranslations('HomePage');
    
    const listFeatures = [
        {
            heading: t('variety_of_themes'),
            desc: t('variety_of_themes_desc'),
            icon: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363057/dinanti_admin_content/themes_67e33dd0b3.svg"
        },
        {
            heading: t('send_greetings'),
            desc: t('send_greetings_desc'),
            icon: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363056/dinanti_admin_content/message_9610fd19f2.svg"
        },
        {
            heading: t('monetary_gifts'),
            desc: t('monetary_gifts_desc'),
            icon: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363056/dinanti_admin_content/money_64662344c2.svg"
        },
        {
            heading: t('custom_domain'),
            desc: t('custom_domain_desc'),
            icon: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363057/dinanti_admin_content/subdomain_305825ab0a.svg"
        }
    ]

    return (
        <section className="flex flex-col items-center justify-center text-center lg:mt-20 sm:mt-14 mt-10">
            <div className="flex flex-col items-center justify-center gap-y-4 px-5">
                <Heading title={t('heading_features')} type="subheading" className="lg:w-[70%] sm:w-[80%]"/>

                <Heading title={t('desc_features')} type="text" className="text-sm lg:w-[70%] sm:w-[80%]" />

                <Link prefetch={false} href={"/themes"} target="_blank" color="default" className="btn bg-MIDNIGHT hover:bg-gray-800 duration-700 text-white font-semibold lg:mt-10 sm:mt-6 mt-4">
                    {t('button_features')}
                </Link>
            </div>

            <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-5 mt-14 mx-auto w-full">
                {listFeatures?.map((data, idx) => (
                    <div key={`${idx}-${idx}`} className="flex flex-col lg:min-h-48 items-start justify-center mx-auto text-left gap-3 xs:gap-4 bg-[#EDEFE2] rounded-lg p-4 w-full xxs:w-64 xs:w-full">

                        <div className="w-9 h-9 rounded bg-[#D7DCBE]">
                            <Image src={data.icon} alt={`icon ${data.heading}`} width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>

                        <div className="flex flex-col items-start justify-start text-left gap-1">
                            <h3 className="font-semibold">{data?.heading}</h3>
                            <p className="text-sm">{data?.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}