"use server";

import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { ThemesPageDataType } from '@/types/themespage.type';
import { MetaRootType, MetaType } from '@/types/meta.type';
import { Fetch } from '@/actions/services/fetch.service';
import LayoutContainer from '@/containers/layout.container';

const ThemesPageSection = dynamic(() => import("@/components/sections/themes/index.section"), { ssr: true });

export default async function ThemesPage() {
  const data = await Fetch.get<ThemesPageDataType>("/api/themes-page?populate=deep&locale=id", { cache: "default" });

  return (
    <LayoutContainer>
      <Suspense>
        <ThemesPageSection data={data} />
      </Suspense>
    </LayoutContainer>
  )
}


export async function generateMetadata(): Promise<Metadata | null> {
  let meta: MetaType;

  try {
    const data = await Fetch.get<MetaRootType>('/api/meta-theme?populate=deep&locale=id');

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
