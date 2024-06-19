import { Fetch } from "@/actions/services/fetch.service";
import NavbarCustom from "@/components/commons/navbar.common";
import { DataLocalizationType } from "@/types/nav.type";


export default async function TemplateRoot({ children }: { children: React.ReactNode }) {
    const data = await Fetch.get<DataLocalizationType>("/api/navigation?populate=*&locale=id", { cache: "default" })

    return (
        <>
            <NavbarCustom data={data} />
            <main className="bg-PRIMARY" style={{
                backgroundImage: 'url("/line.svg")'
            }}>
                <div className="w-full min-h-screen lg:pt-[6.5rem] pt-20">
                    {children}
                </div>
            </main>
        </>
    )
}