'use client'
import '../assets/styles/global.scss'
import Toaster from '../components/Toaster'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
