"use server";

import { Metadata } from 'next';

import { MetaRootType, MetaType } from '@/types/meta.type';
import { PricingDataType } from '@/types/pricingpage.type';
import { Fetch } from '@/actions/services/fetch.service';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const PricingPageSection = dynamic(() => import("@/components/sections/pricing/index.section"));

export default async function Page() {
    const data = await Fetch.get<PricingDataType>("/api/pricing-page-content?populate=deep&locale=id", { cache: "no-cache" });

    return (
        <details>
            <Suspense>
              <PricingPageSection data={data} />
            </Suspense>
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
  