import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from '@/providers/index.provider';
import Footer from '@/components/commons/footer.common';
import ContainerNavbar from '@/components/commons/containerNavbar.common';
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  generator: 'dinanti generator',
  applicationName: 'Dinanti',
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin' }, { name: 'Arnoud' }, { name: 'Danes' }, { name: 'Asa' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation',

  appleWebApp: {
    title: "Dinanti App",
    capable: true,
    statusBarStyle: 'default'
  },

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    address: false,
    email: true,
    telephone: true,
    url: true
  },

  verification: {
    google: 'u6Qwt5SMpEmbvWsILa1JcxpRD-d0hH2xm186VLgD9hE',
    other: {
      "ahrefs-site-verification": "166f48dd2c2a0482e7f6bea772d2ceeee1e0cf9a6e8d54bf99091e41617bc14a"
    },
    yandex: '7d8e1882d8ca7d15',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  viewportFit: 'auto',
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <body className={`${montserrat.className}`}>
        <main>
          <Providers>
            <ContainerNavbar>
              { children }
            </ContainerNavbar>
          </Providers>
        </main>

        <Footer />
      </body>
    </html>
  )
}
