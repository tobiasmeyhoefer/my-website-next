import styles from './page.module.css'
import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={space_grotesk.className + ' flex flex-col justify-center items-center h-[calc(100vh-80px)]'}>
        <h1 className='text-8xl font-light -translate-y-20 text-center'>TOBIAS MEYHÖFER</h1>
        <p className='font-light text-2xl -translate-y-10'>Junior Developer</p>
      </div>
    </main>
  )
}