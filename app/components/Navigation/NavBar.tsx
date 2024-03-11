import Link from "next/link"
import TM from "@/public/TM.svg"
import Image from "next/image"

export default function NavBar({ toggle }: { toggle: () => void }) {
  return (
    <nav className="w-full h-20 sticky top-0 flex justify-between px-4">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <ul className="hidden md:flex gap-x-6 items-center w-full">
            <li className="h-full text-xl min-w-60">
              <Link
                href="/experience"
                className="h-full flex justify-center items-center hover:font-bold transition-all"
              >
                experience
              </Link>
            </li>
            <li className="h-full text-xl min-w-60">
              <Link
                href="/skills"
                className="h-full flex justify-center items-center hover:font-bold transition-all"
              >
                skills
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link href="/">
              <Image src={TM} alt="Logo of the Website" width={50} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
