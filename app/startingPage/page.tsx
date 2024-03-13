import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import me from "@/public/images/me.png"

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function StartingPage() {
  return (
    <div className={space_grotesk.className + ' w-full flex flex-col justify-center gap-8 items-center h-[calc(100vh-128px)]'}>
      <Image
        src={me}
        alt='me as an memoji'
        width={120}
        height={120}
        className=''
      />
      <h1 className='text-6xl font-light text-center md:text-8xl'>TOBIAS MEYHÖFER</h1>
      <p className='font-light text-2xl'>Junior Developer</p>
    </div>
  )
}