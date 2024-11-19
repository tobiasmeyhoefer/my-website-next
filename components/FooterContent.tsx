import Link from "next/link";
import { DarkModeToggler } from "./DarkModeToggler";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div className="flex h-24 items-center justify-end gap-6 p-6 text-sm">
      <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        target="_blank"
        href={"https://github.com/tobiasmeyhoefer/bitz"}
      >
        Github
      </Link>
      <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        target="_blank"
        href={"https://www.youtube.com/@tobitacklestech"}
      >
        Youtube
      </Link>
      {/* <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        href={"/contact"}
      >
        Contact
      </Link> */}
      <Image className="md:hidden" src={"/images/buycoffee.png"} alt="support me" height={38} width={134}/>
      <DarkModeToggler />
    </div>
  );
};

export default FooterContent;
