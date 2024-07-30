"use server";

import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

import LayoutContainer from '@/containers/layout.container';
import { PricingDataType } from '@/libs/types/pricingpage.type';
import { Fetch } from '@/libs/actions/services/fetch.service';
import { MetaRootType, MetaType } from '@/libs/types/meta.type';
import JsonLd from '@/components/globals/jsonld.global';

const PricingPageSection = dynamic(() => import("@/components/sections/pricing/index.section"), { ssr: true });

export default async function Page() {
    const getLang = cookies().get("lang")?.value ?? "id";
    const url = `/api/pricing-page-content?populate=deep&locale=${getLang}`;
    const urlMeta = `/api/meta-pricing-page?populate=deep&locale=${getLang}`;

    const data = await Fetch.get<PricingDataType>({ path: url });
    const dataMeta = await Fetch.get<MetaRootType>({ path: urlMeta });

    return (
      <LayoutContainer>
          <JsonLd data={dataMeta?.attributes?.seo?.structuredData} />
          <Suspense>
            <PricingPageSection data={data} />
          </Suspense>
      </LayoutContainer>
    )
}

export async function generateMetadata(): Promise<Metadata | null> {
    let meta: MetaType;

    const getLang = cookies().get("lang")?.value ?? "id";
    const url = `/api/meta-pricing-page?populate=deep&locale=${getLang}`;
  
    try {
      const data = await Fetch.get<MetaRootType>({ path: url });
  
      meta = data?.attributes?.seo;
    } catch (error) {
      return null;
    }
  
    const metaSocialTwitter = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Twitter");
  
    const metaOpenGraph = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Facebook");
  
    return {
      title: meta?.metaTitle,
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
  