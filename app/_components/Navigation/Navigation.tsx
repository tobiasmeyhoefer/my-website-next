import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";

export default function Navigation() {
  return (
    <nav className="flex h-[140px] justify-center">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-10">
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            className=" group flex h-16 w-16 items-center justify-center object-cover"
            href={"/"}
          >
            <Image className="w-8 group-hover:rotate-180 transition-all" src={Logo} alt="Logo tm"></Image>
          </Link>

          <Link
            className="p-4 transition-all hover:font-semibold"
            href={"gallery"}
          >
            gallery
          </Link>
        </div>
        <ShinyButton />
      </div>
    </nav>
  );
}
