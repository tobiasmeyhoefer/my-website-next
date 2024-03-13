"use client"

import Link from "next/link"
import TM from "@/public/TM.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function NavBar({ toggle }: { toggle: () => void }) {

  const pathname = usePathname()
  
  return (
    <nav className="w-full h-32 sticky top-0 flex justify-center">
        <div className="flex justify-between items-center h-full w-full max-w-screen-2xl">
          <button type="button" className="inline-flex items-center md:hidden pl-10" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 -960 960 960" width="42">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <ul className="hidden md:flex gap-x-6 items-center w-full h-full">
            <li className="h-full text-xl min-w-60">
              <Link
                href="/experience"
                className={`h-full flex justify-center items-center hover:font-bold transition-all ${pathname === '/experience' ? 'font-bold' : ''}`}
              >
                experience
              </Link>
            </li>
            <li className="h-full text-xl min-w-60">
              <Link
                href="/skills"
                className={`h-full flex justify-center items-center hover:font-bold transition-all ${pathname === '/skills' ? 'font-bold' : ''}`}
              >
                skills
              </Link>
            </li>
            <li className="h-full text-xl min-w-60">
              <Link
                href="/aboutme"
                className={`h-full flex justify-center items-center hover:font-bold transition-all ${pathname === '/aboutme' ? 'font-bold' : ''}`}
              >
                me
              </Link>
            </li>
          </ul>
          <div className="flex items-center pr-10">
            <Link href="/" onClick={toggle}>
              <Image src={TM} alt="Logo of the Website" width={60} />
            </Link>
          </div>
        </div>
    </nav>
  )
}
