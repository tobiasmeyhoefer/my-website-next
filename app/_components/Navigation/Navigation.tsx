import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex h-[140px] justify-center w-screen">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-10">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href={"/"}>
            <Image src={Logo} alt="TM Logo" width={34} height={34} />
          </Link>
          <Link href={"work"}>work</Link>
        </div>
        <div>
          <Link className="bg-accentGreen md:px-5 md:py-3 text-sm border-b-4 border-r-4 border-black px-3 py-3 text-black transition-colors hover:bg-accentGreenDark" href={"/contact"}>get in touch</Link>
        </div>
      </div>
    </nav>
  );
}
