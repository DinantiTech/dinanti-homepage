"use server";

import Link from "next/link";
import { Utils } from "@/libs/utils/index.util";

export default async function CardPricing({ data } : { data: Record<string, string> }) {

    const isFree = data?.type?.toLowerCase() === "free";

    return (
        <div className={`${isFree ? "bg-white" : "bg-gradient-to-t to-[#B8BE94] from-[#afb687]"} shadow-lg border w-full max-w-[22rem] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]`}>
            <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                <h3 className='text-xl font-bold'>{data?.title}</h3>
                <h5 className='font-semibold text-xl'>
                    <span className="text-3xl">{Utils.applyDiscount(Number(data?.price ?? 0), Number(data?.discount ?? 0))}</span>k
                </h5>
                <div className='sm:text-base text-sm py-2'>
                    <p>{data?.desc}</p>
                </div>
            </div>


            <Link href={"/maintenance"} className={`${isFree ? "text-MIDNIGHT bg-white" : "bg-MIDNIGHT hover:bg-MIDNIGHT/70 text-white"} btn mx-auto font-bold text-xs sm:mt-0 mt-2`}>
                {data?.btn_text}
            </Link>
        </div>
    );
}