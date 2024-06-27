
import { Utils } from "@/utils/index.util";
import BlockRendererClient from "./rich_text.content";
import { PricingListType } from "@/types/pricingpage.type";
import Link from "next/link";

export default function CardPricing({ data } : { data: PricingListType }) {
    const isFree = data?.type === "free";

    return (
        <div className={`${isFree ? "bg-white" : "bg-gradient-to-t to-[#B8BE94] from-[#afb687]"} shadow-lg border lg:w-[22rem] sm:w-[20rem] w-[18rem] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]`}>
            <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                <h3 className='text-xl font-bold'>{data?.title}</h3>
                <h5 className='font-semibold text-xl'>
                    <span className="text-3xl">{Utils.applyDiscount(data?.price, data?.discount)}</span>k
                </h5>
                <div className='sm:text-base text-sm py-2'>
                    <BlockRendererClient content={data?.description} />
                </div>
            </div>


            <Link href={data?.url} className={`${isFree ? "text-black bg-white" : "bg-[#1D1D1D] hover:bg-[#1D1D1D]/70"} btn text-white mx-auto font-bold text-xs sm:mt-0 mt-2`}>
                {data?.btn_text}
            </Link>
        </div>
    );
}