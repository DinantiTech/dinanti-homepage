"use server";

import { BannersType } from "@/libs/types/homepage.type";
import HotLinkItem from "../../micro/hot_link_item.micro";
import { getTranslations } from "next-intl/server";

export default async function HotLinkSection() {

    const t = await getTranslations('HomePage');

    const bannersList = [
        { title: t('view_our_theme_collections'), btn_text: t('view_theme'), image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363079/dinanti_admin_content/themes_hotlink_74a213ecfc.png", link: "/themes" },
        { title: t('view_price_offers'), btn_text: t('view_pricing'), image: "https://res.cloudinary.com/storyline-beta/image/upload/v1722363079/dinanti_admin_content/pricing_hotlink_5a1fba7506.png", link: "/pricing" }
    ]

    return (
        <section className="mt-14 lg:mt-20 w-full mx-auto my-10">
            <div className="w-full mx-auto px-4 flex flex-col justify-center items-center gap-y-5 md:gap-y-10">
                {bannersList?.map((data, index) => (
                    <div
                        key={index}
                        className={`flex ${index % 2 === 0 ? 'lg:items-start items-center justify-start' : 'lg:items-end items-end justify-end'
                            } w-full`}
                    >
                        <HotLinkItem
                            className="md:w-[27rem] lg:w-[30rem]"
                            label={data?.title}
                            desc={""}
                            text_btn={data?.btn_text}
                            gotolink={data?.link}
                            imageurl={data?.image}
                        />
                    </div>
                ))}

            </div>
        </section>
    )
}