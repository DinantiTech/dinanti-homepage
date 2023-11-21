import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dinanti | Digital Invitation',
    short_name: 'Dinanti',
    description: 'Selamat datang dalam petualangan kreatif undangan kami, di mana kesempurnaan dan keunikan menyatu! Temukan tema undangan yang mencerminkan kepribadian dan impian Anda di menu utama kami. Dengan pilihan tema eksklusif, tim desainer berpengalaman kami siap mewujudkan ide Anda menjadi undangan yang elegan. Jelajahi koleksi tema unik kami yang dapat disesuaikan sepenuhnya sesuai keinginan Anda. Mulailah perjalanan Anda dengan pilihan tema yang sesuai dengan persona Anda. Dengan ketelitian dan dedikasi, tim kami akan mengolah tema impian Anda menjadi undangan yang memikat hati. Bagikan kebahagiaan Anda dengan mudah, undangan dapat segera dibagikan di berbagai media sosial. Setiap sentuhan elegan dan desain personal akan membuat momen istimewa Anda lebih berkesan. Jangan lewatkan kesempatan untuk menciptakan undangan yang mencerminkan identitas Anda, mudah ditemukan di mesin pencarian. Temukan tema undangan eksklusif Anda dan buat kenangan tak terlupakan dengan sentuhan kreatif dari tim ahli kami',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFCF0',
    theme_color: '#FFFCF0',
    lang: 'id',
    categories: ['Digital invitation', 'invitations', 'wedding', 'undangan digital', 'undangan', 'wedding', 'pernikahan'],
    scope: '/',
    orientation: 'natural',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: "maskable"
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  }
}