"use server";

import Container from '@/components/commons/container.common';
import { Fetch } from '@/services/fetch.service';
import { HomePageType } from '@/types/homepage.type';
import { MetaType } from '@/types/meta.type';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MainCarousel = dynamic(() => import('@/components/sections/mainCarousel.section'), { ssr: true });
const FeatureSection = dynamic(() => import('@/components/sections/features.section'), { ssr: true });
const HotLinkSection = dynamic(() => import('@/components/sections/hotLink.section'), { ssr: true });
const HowToUseSection = dynamic(() => import('@/components/sections/howToUse.section'), { ssr: true });

export default async function Home() {
  const data = await Fetch.get<HomePageType>('/api/homepage?populate=deep&locale=id', { cache: "no-cache" });

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat min-h-screen pb-20">

      <Container className='flex items-center flex-col justify-center lg:mt-10 sm:mt-5 mt-3 lg:mb-5'>
        <h1 className='font-bold text-3xl lg:text-5xl text-center sm:w-2/3 w-full my-5 sm:px-0 px-7'>{data?.attributes?.heading}</h1>
        <p className='lg:mb-10 sm:mb-6 mb-4 lg:font-medium lg:text-md'>{data?.attributes?.sub_heading}</p>
      </Container>

      <Suspense>
        <MainCarousel />
      </Suspense>

      <Suspense>
        <div className='h-full w-full flex items-center justify-center'>
          <FeatureSection feature={data?.attributes?.features} />
        </div>
      </Suspense>

      <Suspense>
        <HowToUseSection />

        <HotLinkSection />
      </Suspense>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata | null> {
  let meta: MetaType;

  try {
    const data = await Fetch.get<HomePageType>('/api/homepage?populate=deep');

    const { seo, ...dataHomePage } = data?.attributes;
    meta = seo!
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
