import Link from "next/link";
import Me from "@/public/webp/me.webp";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";

export default function NavBar() {
  return (
    <nav id="nav" className="flex h-[140px] justify-center z-10">
      <div className="flex w-full max-w-[1920px] items-center justify-between md:px-10 px-8">
        <div className="flex items-center">
          <Link
            className="transition-all rounded-full bg-red-200 mr-8"
            href={"/"}
          >
            <Image className="aspect-square object-cover rounded-full hover:brightness-125 transition-all" src={Me} width={50} height={50} alt="image of the author"/>
            {/* <Image className="md:w-8 w-6 group-hover:rotate-180 transition-all" src={Logo} alt="Logo tm"></Image> */}
          </Link>
          <Link
            className="p-4 transition-all hover:font-semibold"
            href={"/gallery"}
          >
            gallery
          </Link>
          <Link
            className="p-4 transition-all hover:font-semibold"
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
