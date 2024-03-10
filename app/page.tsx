import styles from './page.module.css'
import { Inter } from 'next/font/google'

export default function Home() {

  // const inter = Inter({
  //   subsets: ['latin'],
  //   display: 'swap',
  // })

  return (
    <main className={styles.main}>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-80px)]'>
        <h1 className='text-8xl font-light -translate-y-20'>TOBIAS MEYHÖFER</h1>
        <p className='font-light text-2xl -translate-y-10'>Junior Developer</p>
      </div>
    </main>
  )
}
