"use client";

import FeatureSection from '@/components/sections/features.section';
import HotLinkSection from '@/components/sections/hotLink.section';
import HowToUseSection from '@/components/sections/howToUse.section';
import MainCarousel from '@/components/sections/mainCarousel.section';
import { NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'],
  display: 'swap',
})

export default function Home() {
  return (
    <NextUIProvider>
      <div style={{ backgroundImage: `url("/line.svg")` }} className={`${montserrat.className} w-full bg-cover bg-center bg-no-repeat min-h-screen pb-20`}>
        <MainCarousel />

        <div className='h-full w-full flex items-center justify-center'>
          <FeatureSection />
        </div>
        <HowToUseSection />

        <HotLinkSection />
      </div>
    </NextUIProvider>
  )
}
