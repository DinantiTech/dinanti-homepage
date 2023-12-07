import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
    

    return {
      title: slug,    
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    }
  }

export default function Page({ params, searchParams }: Props) {

    console.log(params);
    console.log('wkwkwk');
    
    
    return (
        <div>{params.slug}</div>
    )
}


  type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }