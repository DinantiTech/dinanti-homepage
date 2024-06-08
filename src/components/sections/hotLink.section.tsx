"use client";

import HotLinkItem from "../micro/hotLinkItem.micro";

import Themes from '@/assets/images/themes_hotlink.png';
import Pricing from '@/assets/images/pricing_hotlink.png';

export default function HotLinkSection() {
    return (
        <section className="mt-20 lg:w-[68rem] mx-auto">
            <div className="w-full mx-auto px-4">
                <div className="flex lg:items-start items-center justify-start">
                    <HotLinkItem
                        label="Lihat Koleksi Tema kami"
                        desc="Lihat koleksi tema kami yang terus kami kembangkan."
                        labelBtn="Lihat Tema"
                        goToLink="/"
                        imageUrl={Themes}
                    />
                </div>


                <div className="flex items-end justify-end lg:mt-10 mt-14">
                    <HotLinkItem
                        label="Lihat penawaran Harga"
                        desc="Lihat harga yang kami tawarkan."
                        labelBtn="Lihat Harga"
                        goToLink="/"
                        imageUrl={Pricing}
                        topImg="lg:-top-20 sm:-top-12 -top-7"
                    />
                </div>
            </div>
        </section>
    )
}