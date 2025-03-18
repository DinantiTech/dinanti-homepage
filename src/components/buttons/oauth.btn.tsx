"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonCreate(props: PropsButtonCreateType) {
    const route = useRouter()
    const [isFetching, setIsFetching] = React.useState<boolean>(false)

    const googleLogin = useGoogleLogin({
        flow: 'implicit',
        onSuccess: async codeResponse => {
            setIsFetching(true)
            
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${codeResponse?.access_token}`
                }
            });

            if (response.status === 200) {
                const data = await response.json();
                    
                    const result = await fetch('/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    });

                    setIsFetching(false)

                    if(result?.status === 500) window.location.replace(props?.urlMaintenance)

                    window.location.reload()

            }
        },
        onError: (error) => {
            console.log(error)
        }
    });

    return (
        <>{!props.is_maintenance ? (
            <button onClick={() => googleLogin()} name="button login" className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                {props?.icon_txt ? (<Icon icon={ isFetching ? "eos-icons:bubble-loading" : props?.icon_txt} />) : null}
                <span className="hidden xxss:block">{props?.title}</span>
            </button>
        ) : (
            <Link href={props?.urlMaintenance ?? '/maintenance'} className="btn btn-xs xxs:btn-sm lg:btn-md group-hover:text-lime-900 rounded-lg bg-MIDNIGHT text-white hover:bg-NEUTRAL text-[0.6rem] sm:text-xs md:text-sm">
                {props?.icon_txt ? (<Icon icon={props?.icon_txt} />) : null}
                <span className="hidden xxss:block">{props?.title}</span>
            </Link>
        )}</>
    )
}

type PropsButtonCreateType = {
    icon_txt?: string;
    title?: string;
    urlMaintenance: string;
    is_maintenance?: boolean;
}