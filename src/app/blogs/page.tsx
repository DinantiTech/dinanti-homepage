"use client";

import { StaticImageData } from 'next/image';

import BlogsImage from "@/assets/images/blogs_image.png";
import CardBlog from '@/components/micro/cardBlog.micro';

export default function BlogsPage() {
    const dataBlogs: TypeDataBlogs[] = [
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        },
        {
            date: "12 Januari 2024",
            title: "Sepuluh model baju bridesmaid modern hijab untuk referensi",
            img: BlogsImage,
            link: "/blogs/sepuluh-model-baju-bridesmaid-modern-hijab-untuk-referensi",
        }
    ]

    return (
        <div>
            <div className='w-full h-full flex flex-col items-center justify-center text-center mt-10'>
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <h1 className='font-bold text-3xl'>Kumpulan Blog Kami</h1>
                    <p>Kumpulan blog-blog yang bisa anda baca</p>
                </div>

                <div className='flex items-center justify-center mt-7 gap-x-5 pb-20'>
                    <div className='grid grid-cols-4 gap-5 max-w-[1024px] w-full'>
                        {dataBlogs?.map((data, idx) => (
                            <CardBlog key={data.title + " - " + idx} date={data?.date} img={data.img} link={data?.link} title={data?.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params

//     const titleMeta: string = "Dinanti | Blogs: Kumpulan Blog Kami!";

//     return {
//         title: titleMeta,
//         alternates: {
//             canonical: '/blogs',
//         },
//         openGraph: {
//             title: titleMeta,
//             url: '/blogs',
//             siteName: 'Dinanti',
//             //   images: ['/some-specific-page-image.jpg'],
//         },
//         twitter: {
//             title: titleMeta,
//             creator: 'Dinanti Creator',
//             // images: ['https://nextjs.org/og.png'],
//         },
//     }
// }


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
