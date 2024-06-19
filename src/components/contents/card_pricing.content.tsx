
import { Utils } from "@/utils/index.util";
import BlockRendererClient from "./rich_text.content";
import { PricingListType } from "@/types/pricingpage.type";

export default function CardPricing({ data } : { data: PricingListType }) {
    return (
        <div className='lg:w-[22rem] sm:w-[20rem] w-[18rem] bg-[#B8BE94] flex flex-col items-start justify-between text-left p-5 rounded-2xl lg:h-[20rem] sm:h-[18rem]'>
            <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                <h3 className='text-xl font-bold'>{data?.title}</h3>
                <h5 className='font-semibold text-xl'>
                    <span className="text-3xl">{Utils.applyDiscount(data?.price, data?.discount)}</span>k
                </h5>
                <div className='sm:text-base text-sm py-2'>
                    <BlockRendererClient content={data?.description} />
                </div>
            </div>


            <button name="button" className="bg-[#1D1D1D] text-white mx-auto font-bold text-xs sm:mt-0 mt-2">
                {data?.btn_text}
            </button>
        </div>
    );
}