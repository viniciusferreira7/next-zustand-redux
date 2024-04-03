import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { store } from './store'
import { ReduxProvider } from './context/redux-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next + Zustand + Redux',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-900 text-white">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}