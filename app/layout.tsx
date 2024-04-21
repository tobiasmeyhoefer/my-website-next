import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from './_components/Navigation/Navigation'
import { cn } from '@/lib/utils'

const montserrat = Montserrat({ subsets: ['latin'], variable:"--montserrat" })
const roboto = Roboto({subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable:"--roboto"})

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
    <html lang="en" className='h-full'>
      <body className={cn(
        "text-white bg-primary500 antialiased font-sans min-h-screen h-full overflow-x-hidden",
        montserrat.variable,
        roboto.variable
      )}>
        <header className='absolute top-0 left-0 right-0'>
          <Navigation></Navigation>
        </header>
        <main className="h-full">
          {children}
        </main>
        <div className='fixed bg-white opacity-30 h-12 right-0 left-0 bottom-0 flex justify-center items-center text-black'>
          <p>under construction launch 1.0 in a few days</p>
        </div>
      </body>
    </html>
  )
}
