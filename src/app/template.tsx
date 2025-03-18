"use server";

import Footer from "@/components/globals/footer.global";
import NavbarCustom from "@/components/globals/navbar.global";
import LayoutContainer from "@/containers/layout.container";
import IndexProvider from "@/libs/providers/index.provider";

export default async function TemplateRoot({ children }: { children: React.ReactNode }) {

    return (
        <IndexProvider>
            <NavbarCustom />
            <main className="bg-PRIMARY pb-5 sm:pb-8 bg-cover sm:bg-center bg-no-repeat" 
                style={{
                    backgroundImage: 'url("/line.svg")'
                }}
            >
                <LayoutContainer className="w-full min-h-screen lg:pt-[6.5rem] pt-20">
                    {children}
                </LayoutContainer>
            </main>
            <Footer />
        </IndexProvider>
    )
}