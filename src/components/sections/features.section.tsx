"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import { FeatureType } from "@/types/homepage.type";

export default function FeatureSection({feature}: { feature: FeatureType }) {

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