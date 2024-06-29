"use client";

import Image from "next/image";
import Link from "next/link";

import Heading from "../../globals/heading.global";
import { FeatureType } from "@/libs/types/homepage.type";

export default function FeatureSection({feature}: { feature: FeatureType }) {

    return (
        <section className="flex flex-col items-center justify-center text-center lg:mt-20 sm:mt-14 mt-10">
            <div className="flex flex-col items-center justify-center gap-y-4 px-5">
                <Heading title={feature?.title} type="subheading" className="lg:w-[70%] sm:w-[80%]"/>

                <Heading title={feature?.description} type="text" className="text-sm lg:w-[70%] sm:w-[80%]" />

                <Link href={feature?.url} target="_blank" color="default" className="btn bg-[#1D1D1D] text-white font-semibold lg:mt-10 sm:mt-6 mt-4">
                    {feature?.btn_text}
                </Link>
            </div>

            <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-5 mt-14 mx-auto w-full">
                {feature?.list_features?.map((data, idx) => (
                    <div key={`${data?.id}-${idx}`} className="flex flex-col lg:min-h-48 items-start justify-center mx-auto text-left gap-3 xs:gap-4 bg-[#EDEFE2] rounded-lg p-4 w-full xxs:w-64 xs:w-full">

                        <div className="w-9 h-9 rounded bg-[#D7DCBE]">
                            <Image src={data.icon?.data?.attributes?.url} alt={`icon ${data.name}`} width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>

                        <div className="flex flex-col items-start justify-start text-left gap-1">
                            <h3 className="font-semibold">{data?.name}</h3>
                            <p className="text-sm">{data?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}