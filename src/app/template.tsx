import Footer from "@/components/globals/footer.global";
import NavbarCustom from "@/components/globals/navbar.global";
import LayoutContainer from "@/containers/layout.container";
import { Fetch } from "@/libs/actions/services/fetch.service";
import IndexProvider from "@/libs/providers/index.provider";
import { DataNavigationsType } from "@/libs/types/nav.type";
import { cookies } from "next/headers";


export default async function TemplateRoot({ children }: { children: React.ReactNode }) {
    const getLang = cookies().get("lang")?.value ?? "id";
    const data = await Fetch.get<DataNavigationsType>({ path: `/api/navigation?populate=deep&locale=${getLang}` })

    return (
        <IndexProvider>
            <NavbarCustom data={data} />
            <main className="bg-PRIMARY pb-5 sm:pb-8 bg-cover sm:bg-center" style={{
                backgroundImage: 'url("/line.svg")'
            }}>
                <LayoutContainer className="w-full min-h-screen lg:pt-[6.5rem] pt-20">
                    {children}
                </LayoutContainer>
            </main>
            <Footer data={data?.attributes?.footer} />
        </IndexProvider>
    )
}