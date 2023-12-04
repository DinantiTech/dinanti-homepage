import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function HotLinkItem(props: IProps) {
    return (
        <div className="relative w-[35rem] bg-[#EDEFE2] px-7 py-5 flex flex-col items-start justify-center rounded-xl gap-y-3">
            
            <h2 className="font-semibold text-lg">
                {props.label}
            </h2>

            <p className="w-80 text-sm">{props.desc}</p>

            <Link href={props.goToLink}>
                <Button name={`button ${props.labelBtn}`} radius="full" className="bg-[#1D1D1D] text-white font-bold text-xs">
                    {props.labelBtn}
                </Button>
            </Link>


            { props?.imageUrl ? (
                <Image 
                    src={props.imageUrl}
                    alt={props.label}
                    width={100} 
                    height={100} 
                    className="absolute right-10 -top-10 w-36"
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
}