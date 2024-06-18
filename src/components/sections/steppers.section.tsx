'use client';

import { Step, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";

import { SteppersType } from "@/types/homepage.type";

export default function SteppersSection({ steppers }: { steppers: SteppersType }) {
    return (
        <section className="mt-10 lg:w-[68rem] mx-auto flex items-center justify-center">
            <div className="h-full w-full bg-gray-
             rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 px-4 xs:px-20 md:px-36 lg:px-44 py-8 glass flex items-center justify-center gap-x-10">
                <Image src={steppers?.image?.data?.attributes?.url} alt="Image hand couples" width={1000} height={1000} className="lg:block hidden w-60 h-80 object-cover object-center bg-gray-400 rounded-lg border-4 border-[#D7DCBE]"/>

                <div className="flex flex-col lg:items-start items-center justify-center gap-y-4 w-full">
                    <h1 className="font-bold sm:text-2xl text-xl text-center">{steppers.heading}</h1>

                    <Stepper orientation="vertical" activeStep={4} className="w-full">
                        { steppers?.list_stepper?.map((data) => (
                            <Step key={`step-${data?.id}`}>
                                <StepLabel>
                                    <div className="px-6 py-4 bg-[#EBEDE0] rounded-lg w-full">
                                        <h2 className="text-base font-semibold">{data?.title}</h2>
                                        <p className="lg:text-sm text-xs text-gray-700">{data?.description}</p>
                                    </div>
                                </StepLabel>
                            </Step>
                        )) }
                    </Stepper>
                </div>
            </div>
        </section>
    )
}