'use client';

import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";

export default function HowToUseSection({}) {
    const dataStepper: IDataStepper[] = [
        {
            label: "Isi Informasi Mempelai",
            desc: "Pertama isilah data data mempelai, Quotes, dan Foto mempelai"
        },
        {
            label: "Upload Foto Prewedding",
            desc: "Selanjutnya silahkan upload foto-foto yang ingin anda tampilkan di undangan anda."
        },
        {
            label: "Isi Informasi Acara",
            desc: "Terakhir isi informasi berkaitan dengan acara anda."
        },
        {
            label: "Pilih Tema dan Musik",
            desc: "Terakhir pilih tema dan musik yang ingin anda pakai untuk undangan anda."
        }
    ]

    return (
        <section className="mt-10 w-[68rem] mx-auto flex items-center justify-center">
            <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 px-20 py-8 glass flex items-center justify-center gap-x-10">
                {/* <Image /> */}

                <div className="w-52 h-72 bg-gray-400 rounded-lg border-4 border-[#D7DCBE]" />

                <div className="flex flex-col items-start justify-start gap-y-4">
                    <h1 className="font-bold text-3xl">Cara Pakainya Mudah</h1>

                    <Stepper orientation="vertical" activeStep={4}>
                        { dataStepper?.map((data) => (
                            <Step key={`step-${data?.label}`}>
                                <StepLabel>
                                    <div className="px-6 py-4 bg-[#EBEDE0] rounded-lg w-96">
                                        <h2 className="text-base font-semibold">{data?.label}</h2>
                                        <p className="text-sm">{data?.desc}</p>
                                    </div>
                                </StepLabel>
                                <StepContent>wkwkwk</StepContent>
                            </Step>
                        )) }
                    </Stepper>
                </div>
            </div>
        </section>
    )
}

interface IDataStepper {
    label: string;
    desc: string;
}