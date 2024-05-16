import Link from "next/link";
import Logo from "@/public/svg/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex h-[140px] justify-center">
      <div className="flex w-full max-w-[1920px] items-center justify-between px-10">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href={"work"}>work</Link>
        </div>
        <Button variant="default">
          <Link href={"/contact"}>get in touch</Link>
        </Button>

      </div>
    </nav>
  );
}
