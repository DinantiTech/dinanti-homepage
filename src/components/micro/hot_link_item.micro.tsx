import { Utils } from "@/utils/index.util";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function HotLinkItem(props: IProps) {
    const { className, ...rest } = props

    return (
        <div className={Utils.cn("relative w-full bg-[#EDEFE2] flex items-center justify-center rounded-xl gap-3 p-4 sm:py-6 xs:px-7", className)} { ...rest } >
            <div className="flex flex-col items-start justify-center w-full gap-y-2 text-center xxss:text-left">
                <h3 className="font-semibold text-sm xss:text-base lg:text-lg sm:w-full w-full xxss:w-36 xxs:w-40 xs:w-44 leading-5 lg:leading-none">
                    {props.label}
                </h3>

                <p className="sm:w-[65%] md:w-[60%] lg:w-[55%] w-full sm:text-xs lg:text-sm text-xs">{props.desc}</p>

                <div className="w-full">
                    { props?.gotolink ? (
                        <Link href={props.gotolink} className="btn btn-sm xs:btn-md bg-[#1D1D1D] text-white hover: font-bold text-xs duration-300 mx-auto">
                            {props.text_btn}
                        </Link>
                    ) : null }
                </div>
            </div>

            {props?.imageurl ? (
                <Image
                    src={props.imageurl}
                    alt={props.label}
                    width={500}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="hidden xxs:block sm:absolute right-5 -top-10 aspect-[8/11] rounded-lg object-cover object-top overflow-hidden lg:w-40 md:h-52 md:w-36 sm:w-32 xxs:w-[7rem] w-[6rem] z-10"
                />
            ) : null}
        </div>
    )
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    desc: string;
    imageurl?: string;
    gotolink: string;
    text_btn: string;
}