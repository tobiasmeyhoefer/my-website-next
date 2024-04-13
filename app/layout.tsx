import type { Metadata } from 'next'
import { Space_Grotesk, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from './_components/Navigation/Navigation'
import { cn } from '@/lib/utils'


const super_funky = localFont({
  src: './../public/fonts/SuperFunky.ttf',
  display: 'swap',
  variable: "--super-funky"
})
const space_grotesk = Space_Grotesk({ subsets: ['latin'], variable:"--space-grotesk" })
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
        "text-greenText antialiased font-sans min-h-screen h-full bg-creme",
        space_grotesk.variable,
        super_funky.variable
      )}>
        {/* <header className='absolute top-0 left-0 right-0'>
          <Navigation></Navigation>
        </header>
        <main className="h-full">
          {children}
        </main> */}
        <div className='bg-white h-full flex justify-center items-center'>
          <p>under construction launch 1.0 in a few days</p>
        </div>
      </body>
    </html>
  )
}
