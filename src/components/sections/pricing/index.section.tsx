import Heading from "@/components/commons/heading.common";
import { PricingDataType } from "@/types/pricingpage.type";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CardPricing = dynamic(() => import("@/components/cards/pricing.card"), {ssr: true})

export default function PricingPageSection({ data }: {data: PricingDataType}) {
    return (
        <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-7 pb-20'>

            <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[50%] sm:w-4/5 w-full px-4'>
                <Heading type='subheading' title={data?.attributes?.heading} />
                <Heading type='text' title={data?.attributes?.description} className='sm:text-sm text-xs' />
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 mt-16 gap-5'>
                {data?.attributes?.pricing_list?.map((data) => (
                    <Suspense key={data?.id}>
                        <CardPricing data={data} />
                    </Suspense>
                ))}
            </div>
        </summary>
    )
}