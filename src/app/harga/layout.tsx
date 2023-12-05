import type { Metadata, Viewport } from 'next';
import { Comfortaa, Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const metaDesc: string = "Selamat datang dalam petualangan kreatif undangan kami, di mana kesempurnaan dan keunikan menyatu! Temukan tema undangan yang mencerminkan kepribadian dan impian Anda di menu utama kami. Dengan pilihan tema eksklusif, tim desainer berpengalaman kami siap mewujudkan ide Anda menjadi undangan yang elegan. Jelajahi koleksi tema unik kami yang dapat disesuaikan sepenuhnya sesuai keinginan Anda. Mulailah perjalanan Anda dengan pilihan tema yang sesuai dengan persona Anda. Dengan ketelitian dan dedikasi, tim kami akan mengolah tema impian Anda menjadi undangan yang memikat hati. Bagikan kebahagiaan Anda dengan mudah, undangan dapat segera dibagikan di berbagai media sosial. Setiap sentuhan elegan dan desain personal akan membuat momen istimewa Anda lebih berkesan. Jangan lewatkan kesempatan untuk menciptakan undangan yang mencerminkan identitas Anda, mudah ditemukan di mesin pencarian. Temukan tema undangan eksklusif Anda dan buat kenangan tak terlupakan dengan sentuhan kreatif dari tim ahli kami";

const metaTitle: string = 'Dinanti | Harga: Lihat harga yang kami tawarkan!';

export const metadata: Metadata = {
  metadataBase: new URL('https://dinanti.id'),
  title: metaTitle,
  description: metaDesc,

  generator: 'dinanti generator',
  applicationName: 'Dinanti',
  referrer: 'origin-when-cross-origin',
  keywords: ['dinanti', 'Dinanti', 'Digital Invitation', 'invitation', 'dinanti.id', 'undangan digital', 'pernikahan', 'undangan pernikahan', 'khitan', 'undangan khitanan'],
  authors: [{ name: 'dinanti author' }, { name: 'Saepudin'}, { name: 'Arnoud' }],
  creator: 'Dinanti Creator',
  publisher: 'Dinanti Publisher',
  category: 'digital invitation',

  appleWebApp: {
    title: metaTitle,
    capable: true,
    statusBarStyle: 'default'
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/harga',
    // languages: {
    //   'en-US': '/en-US',
    //   'id-ID': '/id-ID',
    // },
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

  // Opengraph
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: '/',
    siteName: 'Dinanti',
    type: "website"
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDesc,
    creator: 'Dinanti Creator',
    // images: ['https://nextjs.org/og.png'],
  },

  verification: {
    google: 'u6Qwt5SMpEmbvWsILa1JcxpRD-d0hH2xm186VLgD9hE',
    other: {
      "ahrefs-site-verification": "166f48dd2c2a0482e7f6bea772d2ceeee1e0cf9a6e8d54bf99091e41617bc14a"
    },
    yandex: '7d8e1882d8ca7d15',
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
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  )
}
