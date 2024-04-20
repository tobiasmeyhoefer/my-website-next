import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex justify-center h-[140px]">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-10">
        <div className="flex items-center gap-12">
          <Image src={Logo} alt="TM Logo" width={34} height={34} />
          <Link href={"work"}>wanna see something?</Link>
        </div>
        <div>
          <button className="border-b-4 border-r-4 border-black bg-white px-5 py-3 text-black hover:bg-neutral-200 transition-colors">
            get in touch
          </button>
        </div>
      </div>
    </nav>
  );
}
