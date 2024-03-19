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
        <header className='absolute top-0 left-0 right-0'>
          <Navigation></Navigation>
        </header>
        <main className="px-10 md:px-40 2xl:px-80">
          {children}
        </main>
      </body>
    </html>
  )
}
