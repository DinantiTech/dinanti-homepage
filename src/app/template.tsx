import { Fetch } from "@/actions/services/fetch.service";
import Footer from "@/components/commons/footer.common";
import NavbarCustom from "@/components/commons/navbar.common";
import LayoutContainer from "@/containers/layout.container";
import { DataLocalizationType } from "@/types/nav.type";


export default async function TemplateRoot({ children }: { children: React.ReactNode }) {
    const data = await Fetch.get<DataLocalizationType>("/api/navigation?populate=deep&locale=id", { cache: "default" })

    return (
        <>
            <NavbarCustom data={data} />
            <main className="bg-PRIMARY pb-5 sm:pb-8" style={{
                backgroundImage: 'url("/line.svg")'
            }}>
                <LayoutContainer className="w-full min-h-screen lg:pt-[6.5rem] pt-20">
                    {children}
                </LayoutContainer>
            </main>
            <Footer data={data?.attributes?.footer} />
        </>
    )
}