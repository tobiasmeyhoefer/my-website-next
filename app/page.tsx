"use client"

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  let counter = 1;
  function countUpperBody() {
    console.log("upper" + counter)
    if(counter >= 21) {
      counter = 0;
      return;
    }
    counter++;
  }

  function countDownerBuddy() {
    console.log("downer" + counter)
    if(counter < 20) {
      counter = 0;
      return;
    }

    if(counter === 33) {
      router.push("/easterEgg")
      return;
    }

    counter++;
  }

  return (
    <main className={styles.main}>
      <h1>TM</h1>
      <p>under construction</p>
      <div onClick={countUpperBody} className={styles.upperBody}></div>
      <div onClick={countDownerBuddy} className={styles.downerBody}></div>
    </main>
  )
}
