'use client';

import { NextUIProvider } from '@nextui-org/react'
import UseQueryProviders from './useQuery.provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UseQueryProviders>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </UseQueryProviders>
  )
}