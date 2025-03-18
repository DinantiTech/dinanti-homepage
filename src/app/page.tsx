"use server";

import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Heading from '@/components/globals/heading.global';
import LayoutContainer from '@/containers/layout.container';
import { Fetch } from '@/libs/actions/services/fetch.service';
import { MetaRootType, MetaType } from '@/libs/types/meta.type';
import { cookies } from 'next/headers';
import JsonLd from '@/components/globals/jsonld.global';
import { getTranslations } from 'next-intl/server';
import { META } from '@/libs/constants/meta.const';

const MainCarousel = dynamic(() => import('@/components/sections/homepage/main_carousel.section'), { ssr: true });
const FeatureSection = dynamic(() => import('@/components/sections/homepage/features.section'), { ssr: true });
const HotLinkSection = dynamic(() => import('@/components/sections/homepage/hot_link.section'), { ssr: true });
const Steppers = dynamic(() => import('@/components/sections/homepage/steppers.section'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/sections/homepage/testimonials.section'), { ssr: true });

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <>
      <JsonLd data={META.homepage.structuredData} />
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
          <TestimonialsSection />
      </Suspense>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata | null> {
  const t = await getTranslations('Meta')

  return {
    title: t('homepage.title'),
    description: t('homepage.desc'),
    keywords: META.homepage.keywords,
    classification: META.homepage.classification,
    alternates: {
      canonical: META.homepage.canonicalURL,
    },

    openGraph: {
      title: t('homepage.social_title'),
      description: t('homepage.social_desc'),
      images: META.homepage.metaImage,
      type: "website",
      siteName: META.homepage.siteName,
      url: META.homepage.baseUrl,
    },
    twitter: {
      images: META.homepage.metaImage,
      title: t('homepage.social_title'),
      card: "summary_large_image",
      description: t('homepage.social_desc'),
      creator: META.homepage.creator,
      site: META.homepage.baseUrl
    },

  }
}
