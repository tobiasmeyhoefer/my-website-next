import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";

export default function NavBar() {
  return (
    <nav id="nav" className="flex h-[140px] justify-center z-10">
      <div className="flex w-full max-w-[1920px] items-center justify-between md:px-10 px-8">
        <div className="flex items-center gap-4 md:gap-10">
          <Link
            className=" group text-foreground text-4xl hover:font-bold transition-all w-fit h-14 flex items-center justify-center object-cover"
            href={"/"}
          >
            TM
            {/* <Image className="md:w-8 w-6 group-hover:rotate-180 transition-all" src={Logo} alt="Logo tm"></Image> */}
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
