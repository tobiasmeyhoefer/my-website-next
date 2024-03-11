import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navigation/NavBar'
import Navigation from './components/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tobias Meyhöfer',
  description: 'A portfolio of the web, mobile and software developer Tobias Meyhöfer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " text-text"}>
        <header>
          <Navigation></Navigation>
        </header>
        <main className="px-20">
          {children}
        </main>
      </body>
    </html>
  )
}
