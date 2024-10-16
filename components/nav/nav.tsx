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
      className="fixed z-10 flex h-[80px] w-screen max-w-[1920px] justify-center bg-white/20 backdrop-blur-sm backdrop-filter md:h-[100px]"
    >
      <div className="flex w-full max-w-[1920px] items-center justify-between px-8 md:px-10">
        <div className="flex items-center">
          <Link className="rounded-full transition-all" href={"/"}>
            <Image
              className={cn(
                "mr-4 aspect-square w-8 rounded-full object-cover transition-all hover:brightness-125 md:mr-8 md:w-12",
                path === "/" ? "ring-1 ring-foreground" : "ring-0",
              )}
              src={Me}
              width={50}
              height={50}
              alt="image of the author"
            />
          </Link>
          <div className="flex gap-3 md:gap-6">
            <Link
              className={cn(
                "bg-red-200 p-1 transition-all before:p-1 before:transition-all before:content-['changelog'] hover:font-bold before:font-bold md:p-4 before:md:p-4 before:block before:invisible",
                path === "/changelog" ? "font-bold" : "font-normal",
              )}
              href={"/changelog"}
            >
              changelog
            </Link>
            <Link
              className={cn(
                "bg-green-200 p-1 transition-all hover:font-bold md:p-4",
                path === "/blog" ? "font-bold" : "font-normal",
              )}
              href={"/blog"}
            >
              blog
            </Link>
          </div>
        </div>
        <ShinyButton />
      </div>
    </nav>
  );
}
