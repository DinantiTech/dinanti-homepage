import { SpeedInsights } from '@vercel/speed-insights/next';
import {getLocale, getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Dinanti Digital Invitation",
  description: "Dinanti Digital Invitation",
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


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir='ltr' data-theme="base" className='scroll-smooth relative'>
        <body className={`${montserrat.className} relative`}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
            <SpeedInsights />
        </body>
    </html>
  )
}
