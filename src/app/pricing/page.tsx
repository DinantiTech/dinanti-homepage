"use server";

import { Metadata } from 'next';

import Heading from '@/components/commons/heading.common';
import { MetaRootType, MetaType } from '@/types/meta.type';
import { PricingDataType } from '@/types/pricingpage.type';
import CardPricing from '@/components/cards/card_pricing.content';
import { Fetch } from '@/actions/services/fetch.service';

export default async function Page() {
    const data = await Fetch.get<PricingDataType>("/api/pricing-page-content?populate=deep&locale=id", { cache: "no-cache" });

    return (
        <details>
            <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-7 pb-20'>

                <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[50%] sm:w-4/5 w-full px-4'>
                    <Heading type='subheading' title={data?.attributes?.heading} />
                    <Heading type='text' title={data?.attributes?.description} className='sm:text-sm text-xs' />
                </div>

                <div className='grid sm:grid-cols-2 grid-cols-1 mt-16 gap-5'>
                    { data?.attributes?.pricing_list?.map((data) => (
                        <CardPricing data={data} key={data?.id}  />
                    )) }
                </div>
            </summary>
        </details>
    )
}

export async function generateMetadata(): Promise<Metadata | null> {
    let meta: MetaType;
  
    try {
      const data = await Fetch.get<MetaRootType>('/api/meta-pricing-page?populate=deep&locale=id');
  
      meta = data?.attributes?.seo;
    } catch (error) {
      return null;
    }
  
    const metaSocialTwitter = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Twitter");
  
    const metaOpenGraph = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Facebook");
  
    return {
      title: meta.metaTitle,
      description: meta?.metaDescription,
      keywords: meta?.keywords,
      classification: "digital invitation",
      alternates: {
        canonical: meta?.canonicalURL,
      },
  
      openGraph: {
        title: metaOpenGraph?.title,
        description: metaOpenGraph?.description?.replace(/"/g, ''),
        images: metaOpenGraph?.image?.data?.attributes?.formats?.small?.url,
        type: "website",
        siteName: "Dinanti.id",
        url: meta?.baseUrl,
      },
      twitter: {
        images: metaSocialTwitter?.image?.data?.attributes?.formats?.small?.url,
        title: metaSocialTwitter?.title,
        card: "summary_large_image",
        description: metaSocialTwitter?.description?.replace(/"/g, ''),
        creator: "Dinanti Creator",
        site: meta?.baseUrl
      },
  
    }
  }
  