import { Space_Grotesk } from 'next/font/google'
import StartingPage from './startingPage/page'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <StartingPage></StartingPage>
  )
}