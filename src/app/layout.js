import './globals.css'
import { Syne } from 'next/font/google'

const font = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamza Naseem',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
