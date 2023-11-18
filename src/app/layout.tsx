import type { Metadata, Viewport } from 'next';
import { Comfortaa } from 'next/font/google';
import '@/styles/globals.css';
import Head from 'next/head';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  title: 'Dinanti | Digital Invitation',
  description: 'Dinanti, digital invitation',
  generator: 'dinanti generator',
  applicationName: 'Dinanti.id',
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin' }, { name: 'Arnoud' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID',
    },
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Dinanti | Digital Invitation',
    description: 'Dinanti, digital invitation',
    creator: 'Dinanti Creator',
    // images: ['https://nextjs.org/og.png'],
  },

  verification: {
    google: '3_MFcXjc-PY7bOGUoze9STpKoUerKZbPAsILM9jIe-8',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  viewportFit: 'auto',
  // Also supported by less commonly used
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-W6TJBJMW`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-W6TJBJMW")`,
          }}
        />
      </Head>

      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
