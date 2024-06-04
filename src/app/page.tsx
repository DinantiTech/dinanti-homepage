import { HomePageType } from '@/types/homepage.type';
import { MetaType } from '@/types/meta.type';
import { useQuery } from '@tanstack/react-query';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MainCarousel = dynamic(() => import('@/components/sections/mainCarousel.section'), { ssr: false });
const FeatureSection = dynamic(() => import('@/components/sections/features.section'), { ssr: true });
const HotLinkSection = dynamic(() => import('@/components/sections/hotLink.section'), { ssr: true });
const HowToUseSection = dynamic(() => import('@/components/sections/howToUse.section'), { ssr: true });

export default function Home() {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat min-h-screen pb-20">
      <Suspense>
        <MainCarousel />
      </Suspense>

      <Suspense>
        <div className='h-full w-full flex items-center justify-center'>
          <FeatureSection />
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
  "use server";

  let meta: MetaType;

  try {
    const dataFetch = await fetch("https://m9fdg0jl-1337.asse.devtunnels.ms/api/homepage?populate=deep");
  
    const { data } = await dataFetch.json();
  
    const homepageData = data as HomePageType
  
    const { seo, ...dataHomePage } =  homepageData?.attributes;

    meta = seo
  } catch (error) {
    return null;
  }

  const metaSocialTwitter = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Twitter");

  const metaOpenGraph = meta?.metaSocial?.find(({ socialNetwork }) => socialNetwork === "Facebook");

  return {
    title: meta.metaTitle,
    description: meta?.metaDescription,
    keywords: meta?.keywords,
    metadataBase: new URL(meta?.baseUrl),
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
