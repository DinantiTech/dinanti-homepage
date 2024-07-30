"use server";

import { PricingListType } from "@/libs/types/pricingpage.type";
import BlockRendererClient from "../globals/rich_text.global";
import Link from "next/link";
import { Utils } from "@/libs/utils/index.util";

export default async function CardPricing({ data } : { data: PricingListType }) {
    const isFree = data?.type === "free";

    return (
        <div className={`${isFree ? "bg-white" : "bg-gradient-to-t to-[#B8BE94] from-[#afb687]"} shadow-lg border w-full max-w-[22rem] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]`}>
            <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                <h3 className='text-xl font-bold'>{data?.title}</h3>
                <h5 className='font-semibold text-xl'>
                    <span className="text-3xl">{Utils.applyDiscount(data?.price, data?.discount)}</span>k
                </h5>
                <div className='sm:text-base text-sm py-2'>
                    <BlockRendererClient content={data?.description} />
                </div>
            </div>


            <Link href={data?.url} className={`${isFree ? "text-MIDNIGHT bg-white" : "bg-MIDNIGHT hover:bg-MIDNIGHT/70 text-white"} btn mx-auto font-bold text-xs sm:mt-0 mt-2`}>
                {data?.btn_text}
            </Link>
        </div>
    );
}