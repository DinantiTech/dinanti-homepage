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
                { children }
            </main>
        </>
    )
  }