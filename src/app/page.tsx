"use server";

import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Heading from '@/components/globals/heading.global';
import LayoutContainer from '@/containers/layout.container';
import { Fetch } from '@/libs/actions/services/fetch.service';
import { HomePageType } from '@/libs/types/homepage.type';
import { MetaRootType, MetaType } from '@/libs/types/meta.type';
import { cookies } from 'next/headers';
import JsonLd from '@/components/globals/jsonld.global';
import { getTranslations } from 'next-intl/server';

const MainCarousel = dynamic(() => import('@/components/sections/homepage/main_carousel.section'), { ssr: true });
const FeatureSection = dynamic(() => import('@/components/sections/homepage/features.section'), { ssr: true });
const HotLinkSection = dynamic(() => import('@/components/sections/homepage/hot_link.section'), { ssr: true });
const Steppers = dynamic(() => import('@/components/sections/homepage/steppers.section'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/sections/homepage/testimonials.section'), { ssr: true });

export default async function Home() {
  const t = await getTranslations('HomePage');

  const getLang = JSON.parse((await cookies()).get("lang")?.value ?? '"id"');
  const url = `/api/homepage?populate[features][populate][list_features][populate]=icon&populate[steppers][populate]=image,list_stepper&populate[sliders][populate]=image&populate[banners][populate]=image&populate[testimony][populate][customers][populate]=image&populate[localizations]=*&locale=${getLang}`;
  const urlMeta = `/api/meta?populate=deep&locale=${getLang}`;

  const data = await Fetch.get<HomePageType>({ path: url });
  const dataMeta = await Fetch.get<MetaRootType>({ path: urlMeta });
  return (
    <>
      <JsonLd data={dataMeta?.attributes?.seo?.structuredData} />
      <LayoutContainer className='flex items-center flex-col justify-center sm:pb-7 pb-4 sm:gap-y-3'>
        <Heading type='heading' title={t('heading_title')} className='px-2' />
        <Heading type='text' title={t('checkout_themes')} className='lg:text-xl' />
      </LayoutContainer>

      <Suspense>
        <MainCarousel />
      </Suspense>

      <Suspense>
          <div className='h-full w-full flex items-center justify-center'>
            <FeatureSection />
          </div>
      </Suspense>

      <Suspense>
        <Steppers />

        <HotLinkSection />

      </Suspense>

      <Suspense>
        { data?.attributes?.testimony ? (
          <TestimonialsSection data={data?.attributes?.testimony} />
        ) : null }
      </Suspense>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata | null> {
  let meta: MetaType;

  const getLang = JSON.parse((await cookies()).get("lang")?.value ?? '"id"');
  const url = `/api/meta?populate=deep&locale=${getLang}`;

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
