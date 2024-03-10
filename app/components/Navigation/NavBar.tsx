import Link from "next/link"
import TM from "@/public/TM.svg"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="w-full h-20 sticky top-0 flex justify-between px-5">
      <ul className="flex gap-x-6 items-center">
        <li className="h-full">
          <Link href="/experience" className="h-full flex justify-center items-center px-12 hover:font-bold transition-all">experience</Link>
        </li>
        <li className="h-full">
          <Link href="/skills" className="h-full flex justify-center items-center px-12 hover:font-bold transition-all">skills</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link href="/">
          <Image src={TM} alt="Logo of the Website" width={50} />
        </Link>
      </div>
    </nav>
  )
}
