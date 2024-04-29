import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex h-[140px] justify-center w-screen">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-10">
        <div className="flex items-center gap-12">
          <Link href={"/"}>
            <Image src={Logo} alt="TM Logo" width={34} height={34} />
          </Link>
          <Link href={"work"}>wanna see something?</Link>
        </div>
        <div>
          {/* <button className="border-b-4 border-r-4 border-black bg-white px-5 py-3 text-black transition-colors hover:bg-neutral-200">
            get in touch
          </button> */}
          <Link className="bg-accentGreen border-b-4 border-r-4 border-black px-5 py-3 text-black transition-colors hover:bg-neutral-200" href={"/contact"}>get in touch</Link>
        </div>
      </div>
    </nav>
  );
}
