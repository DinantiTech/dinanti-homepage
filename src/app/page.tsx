"use client";

import dynamic from 'next/dynamic';

const MainCarousel = dynamic(() => import('@/components/sections/mainCarousel.section'), { ssr: false });
const FeatureSection = dynamic(() => import('@/components/sections/features.section'), { ssr: false });
const HotLinkSection = dynamic(() => import('@/components/sections/hotLink.section'), { ssr: false });
const HowToUseSection = dynamic(() => import('@/components/sections/howToUse.section'), { ssr: false });

export default function Home() {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat min-h-screen pb-20">
      <MainCarousel />

      <div className='h-full w-full flex items-center justify-center'>
        <FeatureSection />
      </div>
      <HowToUseSection />

      <HotLinkSection />
    </div>
  )
}

