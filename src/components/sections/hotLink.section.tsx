"use server";

import HotLinkItem from "../micro/hotLinkItem.micro";

import { BannersType } from "@/types/homepage.type";

export default async function HotLinkSection({ banners }: { banners: BannersType[] }) {
    return (
        <section className="mt-14 lg:mt-20 w-full mx-auto my-10">
            <div className="w-full mx-auto px-4 flex flex-col justify-center items-center gap-y-5 md:gap-y-10">
                {banners?.map((data, index) => (
                    <div
                        key={data?.id}
                        className={`flex ${index % 2 === 0 ? 'lg:items-start items-center justify-start' : 'lg:items-end items-end justify-end'
                            } w-full`}
                    >
                        <HotLinkItem
                            className="md:w-[27rem] lg:w-[30rem]"
                            label={data?.title}
                            desc={data?.description}
                            text_btn={data?.btn_text}
                            gotolink={data?.url}
                            imageurl={data?.image?.data?.attributes?.url}
                        />
                    </div>
                ))}

            </div>
        </section>
    )
}