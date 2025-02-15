"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StorageUtil from "@/libs/helpers/storage.helper";

export default function ButtonCreate(props: PropsButtonCreateType) {
    const route = useRouter()

    const googleLogin = useGoogleLogin({
        flow: 'implicit',
        onSuccess: async codeResponse => {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${codeResponse?.access_token}`
                }
            });
            const data = await response.json();

            const loginResponse = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: data?.email }),
            });

            const result = await loginResponse.json();
            console.log(result.user);
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const handleCreateInvitation = () => {
        googleLogin()
        // route.push('/maintenance')
    }

    // const user = new Auth()
            // const {  } = user.login({  });


            // if (data.status !== 200) {
            //     return route.push('/')
            // }

            // const result = await data?.json();

            // StorageUtil.setItem({ type: 'cookie', key: 'crd', value: result?.data });

            // console.log("token", result);

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