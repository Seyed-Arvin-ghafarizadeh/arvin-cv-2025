import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arvin Ghafrizaadeh - AI Engineer & Systems Architect',
  description: 'Professional CV of Arvin Ghafrizaadeh, AI Engineer and Systems Architect with expertise in LLM-based systems, AI agents, and backend architecture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
