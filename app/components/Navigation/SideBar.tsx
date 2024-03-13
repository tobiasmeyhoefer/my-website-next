import Link from "next/link"

export default function SideBar({
  isOpen,
  toggle,
}: {
  isOpen: boolean
  toggle: () => void
}): JSX.Element {
  return (
    <div
      className="fixed md:hidden w-full bg-white z-2 bottom-0 top-0 flex justify-center"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`,
      }}
    >
      <ul className="text-center text-xl w-full flex flex-col justify-center">
        <li className="w-full">
          <Link
            onClick={toggle}
            href="/experience"
            className="h-full flex justify-center items-center hover:font-bold hover:bg-lightGray py-8 transition-all"
          >
            experience
          </Link>
        </li>
        <li>
          <Link
            onClick={toggle}
            href="/skills"
            className="h-full flex justify-center items-center hover:bg-lightGray py-8 hover:font-bold transition-all"
          >
            skills
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}
