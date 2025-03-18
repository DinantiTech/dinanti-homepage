"use server";

import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import LayoutContainer from '@/containers/layout.container';
import { getTranslations } from 'next-intl/server';
import { META } from '@/libs/constants/meta.const';

const PricingPageSection = dynamic(() => import("@/components/sections/pricing/index.section"), { ssr: true });

export default async function Page() {

    return (
      <LayoutContainer>
          {/* <JsonLd data={dataMeta?.attributes?.seo?.structuredData} /> */}
          <Suspense>
            <PricingPageSection />
          </Suspense>
      </LayoutContainer>
    )
}

export async function generateMetadata(): Promise<Metadata | null> {
  const t = await getTranslations('Meta');

  return {
    title: t('pricingpage.title'),
    description: t('pricingpage.desc'),
    keywords: META.homepage.keywords,
    classification: META.homepage.classification,
    alternates: {
      canonical: META.pricingpage.canonicalURL,
    },

    openGraph: {
      title: t('pricingpage.social_title'),
      description: t('pricingpage.social_desc'),
      images: META.homepage.metaImage,
      type: "website",
      siteName: META.homepage.siteName,
      url: META.pricingpage.baseUrl,
    },
    twitter: {
      images: META.homepage.metaImage,
      title: t('pricingpage.social_title'),
      card: "summary_large_image",
      description: t('pricingpage.social_desc'),
      creator: META.homepage.creator,
      site: META.pricingpage.baseUrl
    },
  }
  }
  