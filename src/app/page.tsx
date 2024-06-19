"use server";

import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Container from '@/components/commons/container.common';
import { HomePageType } from '@/types/homepage.type';
import { MetaRootType, MetaType } from '@/types/meta.type';
import Heading from '@/components/commons/heading.common';
import { Fetch } from '@/actions/services/fetch.service';

const MainCarousel = dynamic(() => import('@/components/sections/mainCarousel.section'), { ssr: false });
const FeatureSection = dynamic(() => import('@/components/sections/features.section'), { ssr: true });
const HotLinkSection = dynamic(() => import('@/components/sections/hotLink.section'), { ssr: true });
const Steppers = dynamic(() => import('@/components/sections/steppers.section'), { ssr: true });

export default async function Home() {
  const data = await Fetch.get<HomePageType>('/api/homepage?populate=deep&locale=id', { cache: "no-cache" });

  return (
    <>
      <Container className='flex items-center flex-col justify-center sm:pb-7 pb-4 sm:gap-y-3'>
        <Heading type='heading' title={data?.attributes?.heading} />
        <Heading type='text' title={data?.attributes?.sub_heading} className='lg:text-xl' />
      </Container>

      <Suspense>
        <MainCarousel sliders={data?.attributes?.sliders} />
      </Suspense>

      <Suspense>
        <div className='h-full w-full flex items-center justify-center'>
          <FeatureSection feature={data?.attributes?.features} />
        </div>
      </Suspense>

      <Suspense>
        <Steppers steppers={data?.attributes?.steppers} />

        <HotLinkSection />
      </Suspense>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata | null> {
  let meta: MetaType;

  try {
    const data = await Fetch.get<MetaRootType>('/api/meta?populate=deep&locale=id');

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
