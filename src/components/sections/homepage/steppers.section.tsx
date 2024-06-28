'use client';

import Image from "next/image";

import { SteppersType } from "@/types/homepage.type";
import Heading from "../../globals/heading.global";

export default function SteppersSection({ steppers }: { steppers: SteppersType }) {
    return (
        <section className="mt-10 lg:w-[68rem] mx-auto flex items-center justify-center">
            <div className="h-full w-full bg-gray-
             rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 px-4 sm:px-20 md:px-36 lg:px-44 py-8 glass flex items-center justify-center gap-x-10">
                <Image src={steppers?.image?.data?.attributes?.url} loading="lazy" alt="Image hand couples" width={1000} height={1000} className="lg:block hidden w-60 h-80 object-cover object-center bg-gray-400 rounded-lg border-4 border-[#D7DCBE]" />

                <div className="flex flex-col lg:items-start items-center justify-center gap-y-4 md:gap-y-6 w-full">
                    <Heading type="subheading" title={steppers.heading} className="text-center" />

                    <ul className="steps steps-vertical gap-y-2">
                        {steppers?.list_stepper?.map(data => (
                            <li key={data?.id} className="step">
                                <div className="flex items-start justify-center flex-col px-6 py-4 gap-y-1 bg-[#EBEDE0] rounded-lg w-full text-left">
                                    <h2 className="text-sm xxs:text-base font-semibold">{data?.title}</h2>
                                    <p className="md:text-sm xxs:text-xs text-[0.6rem] text-gray-700">{data?.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}