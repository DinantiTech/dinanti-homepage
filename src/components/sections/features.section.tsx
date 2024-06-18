"use client";

import Image from "next/image";

import { FeatureType } from "@/types/homepage.type";
import Heading from "../commons/heading.common";

export default function FeatureSection({feature}: { feature: FeatureType }) {

    return (
        <div className="flex flex-col items-center justify-center text-center lg:mt-20 sm:mt-14 mt-10">
            <div className="flex flex-col items-center justify-center gap-y-4 px-5">
                <Heading title={feature?.title} type="subheading" className="lg:w-[70%] sm:w-[80%]"/>

                <Heading title={feature?.description} type="text" className="text-sm lg:w-[70%] sm:w-[80%]" />

                <button color="default" className="btn bg-[#1D1D1D] text-white font-semibold lg:mt-10 sm:mt-6 mt-4">
                    {feature?.btn_text}
                </button>
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