import type { Metadata } from 'next'
import '@/styles/global.css'
import AuthPanel from '@/components/AuthPanel/AuthPanel'

export const metadata: Metadata = {
  title: 'TestTask',
  description: ':O',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <main>
        <AuthPanel />
        {children}
        </main>
      </body>
    </html>
  )
}
