"use client"

import Link from "next/link";
import Me from "@/public/webp/me.webp";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {

  const path = usePathname()

  return (
    <nav id="nav" className="flex h-[140px] justify-center z-10">
      <div className="flex w-full max-w-[1920px] items-center justify-between md:px-10 px-8">
        <div className="flex items-center">
          <Link
            className="transition-all rounded-full mr-8"
            href={"/"}
          >
            <Image className={cn("aspect-square md:w-12 w-8 object-cover rounded-full hover:brightness-125 transition-all", path === "/" ? "ring-1 ring-foreground" : "ring-0")}  src={Me} width={50} height={50} alt="image of the author"/>
            {/* <Image className="md:w-8 w-6 group-hover:rotate-180 transition-all" src={Logo} alt="Logo tm"></Image> */}
          </Link>
          {/* <Link
            className="p-4 transition-all hover:font-semibold"
            href={"/gallery"}
          >
            gallery
          </Link> */}
          <Link
            className={cn("p-4 transition-all hover:font-semibold", path === "/tech" ? "font-bold" : "font-normal")}
            href={"/tech"}
          >
            tech
          </Link>
        </div>
        <ShinyButton />
      </div>
    </nav>
  );
}
