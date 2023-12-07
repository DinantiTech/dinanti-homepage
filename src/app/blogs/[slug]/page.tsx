import { Metadata, ResolvingMetadata } from "next";

export default function Page({ params, searchParams }: Props) {

  console.log(params);
  console.log('wkwkwk');


  return (
    <div>{params.slug}</div>
  )
}


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const titleMeta: string = "Dinanti | Blogs: Sepuluh model baju bridesmaid modern hijab untuk referensi";

  return {
      title: titleMeta,
      alternates: {
          canonical: '/blogs',
      },
      openGraph: {
          title: titleMeta,
          url: '/blogs',
          siteName: 'Dinanti',
          //   images: ['/some-specific-page-image.jpg'],
      },
      twitter: {
          title: titleMeta,
          creator: 'Dinanti Creator',
          // images: ['https://nextjs.org/og.png'],
      },
  }
}


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}