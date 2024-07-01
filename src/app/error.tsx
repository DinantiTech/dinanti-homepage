'use client' // Error components must be Client Components
 
import LayoutContainer from '@/containers/layout.container'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
    const router = useRouter()
 
  return (
    <LayoutContainer>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => router.replace("/")}
        className='btn mt-5'
    >
        Try again
      </button>
    </LayoutContainer>
  )
}