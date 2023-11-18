import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dinanti | Digital Invitation',
    short_name: 'Dinanti',
    description: 'Dinanti',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFCF0',
    theme_color: '#FFFCF0',
    lang: 'id',
    categories: ['Digital invitation', 'invitations', 'wedding'],
    scope: '/',
    orientation: 'natural',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '32',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '16px',
        type: 'image/x-icon',
      },
    ],
  }
}