import { Pacifico } from 'next/font/google';
import Image from 'next/image';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full gap-y-2">
      <Image src="/logo.png" alt='Logo' width={400} height={400} className='w-36 py-2' />
      <h1 className={`${pacifico.className} text-4xl`}>Dinanti</h1>
      <p>Digital invitation</p>
    </main>
  )
}
