"use server";

import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import LayoutContainer from '@/containers/layout.container';
import JsonLd from '@/components/globals/jsonld.global';
import { META } from '@/libs/constants/meta.const';
import { getTranslations } from 'next-intl/server';

const ThemesPageSection = dynamic(() => import("@/components/sections/themes/index.section"), { ssr: true });

export default async function ThemesPage() {

  return (
    <LayoutContainer>
      <JsonLd data={META.themespage.structuredData} />
      <Suspense>
        <ThemesPageSection />
      </Suspense>
    </LayoutContainer>
  )
}

export async function generateMetadata(): Promise<Metadata | null> {
  const t = await getTranslations('Meta');

  return {
    title: t('themes.title'),
    description: t('themes.desc'),
    keywords: META.homepage.keywords,
    classification: META.homepage.classification,
    alternates: {
      canonical: META.themespage.canonicalURL,
    },

    openGraph: {
      title: t('themes.social_title'),
      description: t('themes.social_desc'),
      images: META.homepage.metaImage,
      type: "website",
      siteName: META.homepage.siteName,
      url: META.themespage.baseUrl,
    },
    twitter: {
      images: META.homepage.metaImage,
      title: t('themes.social_title'),
      card: "summary_large_image",
      description: t('themes.social_desc'),
      creator: META.homepage.creator,
      site: META.themespage.baseUrl
    },
  }
}
