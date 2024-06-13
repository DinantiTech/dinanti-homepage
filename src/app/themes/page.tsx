"use server";

import { Metadata, ResolvingMetadata } from 'next';

import Container from '@/components/commons/container.common';
import CardThemeContent from '@/components/contents/card_theme.content';
import { Fetch } from '@/services/fetch.service';
import { ThemesPageDataType } from '@/types/themespage.type';
import Heading from '@/components/commons/heading.common';
import { MetaRootType, MetaType } from '@/types/meta.type';

export default async function ThemesPage() {

    const data = await Fetch.get<ThemesPageDataType>("/api/themes-page?populate=deep&locale=id", { cache: "default" });

    return (
        <Container>
            <details>
                <summary className='w-full h-full flex flex-col items-center justify-center text-center mt-10 pb-20'>

                    <div className='flex flex-col items-center justify-center gap-y-3 lg:w-[50%] sm:w-4/5 w-full'>
                        <Heading title={data?.attributes?.heading} type='subheading' />
                        <Heading title={data?.attributes?.description} type='text' />
                    </div>


                    <div className='grid xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                        {data?.attributes?.themes_list?.map((data) => (
                            <CardThemeContent key={data?.id} data={data} />
                        ))}
                    </div>
                </summary>
            </details>
        </Container>
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
  