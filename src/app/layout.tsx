import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { cookies } from 'next/headers';
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Dinanti Digital Invitation",
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },

  formatDetection: {
    address: false,
    email: true,
    telephone: true,
    url: true
  },

  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE ?? null,
    other: {
      "ahrefs-site-verification": process.env.AHREF_SITE_VERIFICATION ?? "",
    },
    yandex: process.env.YANDEX_SEARCH_COBSOLE ?? null,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  viewportFit: 'auto',
  interactiveWidget: 'resizes-visual',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const getLang = cookies().get("lang")?.value ?? "id";

  return (
    <html lang={getLang} dir='ltr' data-theme="base" className='scroll-smooth relative'>
        <body className={`${montserrat.className} relative`}>
            {children}
        </body>
    </html>
  )
}
