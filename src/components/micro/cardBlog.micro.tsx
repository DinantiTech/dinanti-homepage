import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function CardBlog(props: TypeProps) {
    return (
        <Link href={props.link} className="snap-center">
            <div className='rounded-xl shadow-md shadow-[#D7DCBE] flex flex-col items-center justify-start overflow-hidden bg-white hover:cursor-pointer hover:shadow-lg gap-y-3 pb-3 md:w-full w-52'>
                <Image src={props.img} alt='' width={500} height={500} className='w-full h-1/2 top-0 object-cover object-center' />

                <div className='flex flex-col items-center justify-center px-2 gap-y-2'>
                    <span className='text-xs text-gray-600'>{props.date}</span>
                    <p className='text-xs font-semibold'>{props.title}</p>
                </div>
            </div>
        </Link>
    )
}

type TypeProps = {
    title: string;
    date: string;
    img: StaticImageData;
    link: string;
}
