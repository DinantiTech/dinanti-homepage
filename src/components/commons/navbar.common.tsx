
import { DataLocalizationType, NavigationType } from "@/types/nav.type";
import Image from "next/image";
import Link from "next/link";
import Container from "./container.common";

export default function NavbarCustom({ data }: { data: DataLocalizationType }) {

    return (
        <header>
            <div className="fixed top-0 z-50 bg-base-100 w-full border-b border-lime-900/10">
                <Container className="navbar lg:max-w-[71rem] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavList data={data?.attributes?.navigation} />
                            </ul>
                        </div>

                        <Link href="/" className="w-20 xxs:w-[6rem]">
                            <Image src={data?.attributes?.icon?.data?.attributes?.url} alt="Logo Dinanti" width={500} height={500} className="w-full" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavList data={data?.attributes?.navigation} />
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </Container>
            </div>
        </header>
    );
}

function NavList({ data }: { data: NavigationType[] }) {
    return (
        <>
            {data?.map((item) => (
                <li className="group" key={item?.id}>
                    <Link className="group-hover:font-bold group-hover:text-lime-900" href={item?.url}>{item?.title}</Link>
                </li>
            ))}
        </>
    )
}
