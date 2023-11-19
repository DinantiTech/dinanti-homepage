import type { Metadata, Viewport } from 'next';
import { Comfortaa } from 'next/font/google';
import '@/styles/globals.css';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  title: 'Dinanti | Digital Invitation',
  description: 'Dinanti, digital invitation',
  generator: 'dinanti generator',
  applicationName: 'Dinanti.id',
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin'}, { name: 'Arnoud' }],
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
    // languages: {
    //   'en-US': '/en-US',
    //   'id-ID': '/id-ID',
    // },
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
    google: 'u6Qwt5SMpEmbvWsILa1JcxpRD-d0hH2xm186VLgD9hE',
    other: {
      "ahrefs-site-verification": "166f48dd2c2a0482e7f6bea772d2ceeee1e0cf9a6e8d54bf99091e41617bc14a"
    }
    // yandex: 'yandex',
    // yahoo: 'yahoo',
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
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
