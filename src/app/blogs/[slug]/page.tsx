import { Metadata, ResolvingMetadata } from "next";
import Image, { StaticImageData } from "next/image";
import { Button } from "@nextui-org/react";

import Container from "@/components/commons/container.common";
import BlogImage from "@/assets/images/blogs_image.png";
import BgAds from "@/assets/images/bg.png";
import BlogsImage from "@/assets/images/blogs_image.png";
import CardBlog from "@/components/micro/cardBlog.micro";

export default function Page({ params, searchParams }: Props) {
  const dataBlogs: TypeDataBlogs[] = [
    {
      date: "12 Januari 2024",
      title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
      img: BlogsImage,
      link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi"
    },
    {
      date: "12 Januari 2024",
      title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
      img: BlogsImage,
      link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi"
    },
    {
      date: "12 Januari 2024",
      title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
      img: BlogsImage,
      link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi"
    },
    {
      date: "12 Januari 2024",
      title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
      img: BlogsImage,
      link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi"
    }
  ]


  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center lg:px-20 mt-10">
        <Image src={BlogImage} alt="image blogs" width={600} height={600} className="w-full lg:h-[26rem] object-cover object-top rounded-2xl" />

        <div className="flex flex-col items-center justify-center gap-y-4 mt-10 text-center">
          <h1 className="font-bold sm:text-4xl xxs:text-2xl text-xl">Sepuluh model baju bridesmaid modern hijab untuk referensi</h1>

          <span className="xs:text-sm text-xs">12 Januari 2024 - Dinanti Creator </span>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-y-4 leading-relaxed">
          <p>Lorem ipsum dolor sit amet consectetur. Suscipit sollicitudin justo integer ultricies. In vitae odio vitae elit sagittis nunc augue blandit. Dolor non proin eu vitae vel sem egestas lectus. Risus aliquam et sed vulputate ultrices. Duis adipiscing lorem enim risus massa. Quam sed in enim sed rhoncus tellus id elit. Platea pharetra egestas suspendisse blandit.</p>

          <h3 className="text-2xl font-semibold">Orci non mauris fames cras nec id vel. </h3>

          <p>Quis egestas ligula ultrices nulla egestas. Cras augue amet ullamcorper quis. Pharetra nulla tortor faucibus in tellus quis consequat rutrum volutpat. Ornare rhoncus viverra nibh quis nibh felis. Nec sed pulvinar auctor ornare molestie ornare netus adipiscing. Purus amet sit quam dui donec lectus ullamcorper. Velit sed nulla amet eget ac senectus sed velit elit. Ut facilisis amet congue amet. Quis purus arcu amet semper egestas ligula.
            Facilisis lobortis neque nec tristique massa. Pharetra vitae facilisi in adipiscing. Eros sapien lacus lobortis integer sed. Non praesent mi nulla porttitor viverra nec. Porttitor sagittis purus fermentum scelerisque dictum venenatis diam. In mauris interdum praesent eu pharetra nulla ullamcorper massa.
            Scelerisque enim id nec ut et. Proin lobortis donec molestie at. Ut sit morbi aliquam ut vitae. Viverra commodo nisi nunc aliquam sit etiam. Posuere gravida in cras amet felis at et faucibus sed.</p>

          <h3 className="text-2xl font-semibold">Orci non mauris fames cras nec id vel. </h3>

          <p>Quis egestas ligula ultrices nulla egestas. Cras augue amet ullamcorper quis. Pharetra nulla tortor faucibus in tellus quis consequat rutrum volutpat. Ornare rhoncus viverra nibh quis nibh felis. Nec sed pulvinar auctor ornare molestie ornare netus adipiscing. Purus amet sit quam dui donec lectus ullamcorper. Velit sed nulla amet eget ac senectus sed velit elit. Ut facilisis amet congue amet. Quis purus arcu amet semper egestas ligula.
            Facilisis lobortis neque nec tristique massa. Pharetra vitae facilisi in adipiscing. Eros sapien lacus lobortis integer sed. Non praesent mi nulla porttitor viverra nec. Porttitor sagittis purus fermentum scelerisque dictum venenatis diam. In mauris interdum praesent eu pharetra nulla ullamcorper massa.
            Scelerisque enim id nec ut et. Proin lobortis donec molestie at. Ut sit morbi aliquam ut vitae. Viverra commodo nisi nunc aliquam sit etiam. Posuere gravida in cras amet felis at et faucibus sed.</p>
        </div>
      </div>


      {/* Banner */}
      {/* <div className="relative w-full aspect-[16/6] md:mt-28 mt-20 flex items-center justify-center flex-col mb-20 overflow-hidden">
        <Image src={BgAds} alt="image ads" className="absolute top-0 left-0 w-full h-full object-cover object-center hidden md:block" />

        <div className="z-10 bg-[#CBD2A8] md:w-[34rem] md:h-52 w-full h-full flex flex-col items-start justify-center md:gap-y-5 gap-y-2 px-7 rounded-xl overflow-hidden relative">
          <Image width={500} height={500} src={ThemesImg} alt='themes category' className='absolute sm:right-0 -right-20 top-0 sm:w-72 xxs:w-64 w-60' />

          <h4 className="font-bold sm:text-2xl xs:text-xl sm:w-1/2 w-[80%] z-10">Buat Undangan Menikah Digital</h4>
          <Button radius="full" className="bg-[#1D1D1D] text-white" size="sm">Coba Gratis</Button>
        </div>
      </div> */}

      <div className="w-full flex flex-col items-center justify-center pb-20 gap-y-7">
        <h2 className="font-bold text-2xl">Lihat Artikel Lain</h2>

        <div className='md:grid grid-cols-4 gap-5 snap-x  snap-proximity flex overflow-x-auto w-full'>
          {dataBlogs?.map((data, idx) => (
            <CardBlog key={data.title + " - " + idx} date={data?.date} img={data.img} link={data?.link} title={data?.title} />
          ))}
        </div>
      </div>
    </Container>
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

type TypeDataBlogs = {
  title: string;
  date: string;
  img: StaticImageData;
  link: string;
}
