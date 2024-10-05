"use client";

import Link from "next/link";
import Me from "@/public/webp/me.webp";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const path = usePathname();

  return (
    <nav
      id="nav"
      className="fixed z-10 flex h-[140px] w-full max-w-[1920px] justify-center bg-white/10 backdrop-blur-sm backdrop-filter"
    >
      <div className="flex w-full max-w-[1920px] items-center justify-between px-8 md:px-10">
        <div className="flex items-center">
          <Link className="mr-8 rounded-full transition-all" href={"/"}>
            <Image
              className={cn(
                "aspect-square w-8 rounded-full object-cover transition-all hover:brightness-125 md:w-12",
                path === "/" ? "ring-1 ring-foreground" : "ring-0",
              )}
              src={Me}
              width={50}
              height={50}
              alt="image of the author"
            />
          </Link>
          {/* <Link
            className={cn(
              "p-4 transition-all hover:font-semibold",
              path === "/tech" ? "font-bold" : "font-normal",
            )}
            href={"/tech"}
          >
            tech
          </Link> */}
          <Link
            className={cn(
              "p-4 transition-all hover:font-semibold",
              path === "/changelog" ? "font-bold" : "font-normal",
            )}
            href={"/changelog"}
          >
            changelog
          </Link>
        </div>
        <ShinyButton />
      </div>
    </nav>
  );
}
