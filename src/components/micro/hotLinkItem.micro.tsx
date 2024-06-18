import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function HotLinkItem(props: IProps) {
    return (
        <div className="relative w-[35rem] bg-[#EDEFE2] px-7 py-5 flex flex-col items-start justify-center rounded-xl gap-y-3">
            
            <h2 className="font-semibold sm:text-lg sm:w-full w-44 leading-5 lg:leading-none">
                {props.label}
            </h2>

            <p className="lg:w-80 sm:w-3/4 w-[12rem] sm:text-sm text-xs">{props.desc}</p>

            <Link href={props.goToLink}>
                <button name={`button ${props.labelBtn}`} className="btn bg-[#1D1D1D] text-white font-bold text-xs">
                    {props.labelBtn}
                </button>
            </Link>


            { props?.imageUrl ? (
                <Image 
                    src={props.imageUrl}
                    alt={props.label}
                    width={100} 
                    height={100} 
                    className={`${props?.topImg ? props.topImg : 'lg:-top-12 -top-5'} absolute lg:right-10 right-5 lg:w-36 sm:w-32 w-[7rem]`}
                />
            ) : null }
        </div>
    )
}

interface IProps {
    label: string;
    desc: string;
    imageUrl?: StaticImageData;
    goToLink: string;
    labelBtn: string;
    topImg?: string;
}