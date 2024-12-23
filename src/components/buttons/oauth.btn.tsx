"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StorageUtil from "@/libs/helpers/storage.helper";

export default function ButtonCreate(props: PropsButtonCreateType) {

    const route = useRouter()

    // const googleLogin = useGoogleLogin({
    //     flow: 'auth-code',
    //     onSuccess: async codeResponse => {
    //         const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL_DINANTI}/auth/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ code: codeResponse?.code })
    //         })

    //         if (data.status !== 200) {
    //             return route.push('/')
    //         }

    //         const result = await data?.json();

    //         StorageUtil.setItem({ type: 'cookie', key: 'crd', value: result?.data });

    //         console.log("token", result);
    //     }
    // });

    const handleCreateInvitation = () => route.push('/maintenance')

    return (
        <>{!props.is_maintenance ? (
            <button onClick={handleCreateInvitation} name="button login" className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                {props?.icon_txt ? (<Icon icon={props?.icon_txt} />) : null}
                <span className="hidden xxss:block">{props?.title}</span>
            </button>
        ) : (
            <Link href={props?.url} className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                {props?.icon_txt ? (<Icon icon={props?.icon_txt} />) : null}
                <span className="hidden xxss:block">{props?.title}</span>
            </Link>
        )}</>
    )
}

type PropsButtonCreateType = {
    icon_txt?: string;
    title: string;
    url: string;
    is_maintenance: boolean;
}