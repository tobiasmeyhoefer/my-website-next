import Link from "next/link";
import { DarkModeToggler } from "./DarkModeToggler";

const FooterContent = () => {
    return ( 
        <div className="flex gap-4 items-center justify-end p-4 h-20 text-sm">
            <Link className="hover:text-neutral-900 text-neutral-600" target="_blank" href={"https://github.com/tobiasmeyhoefer/bitz"}>Github</Link>
            <Link className="hover:text-neutral-900 text-neutral-600" target="_blank" href={"https://www.youtube.com/@tobitacklestech"}>Youtube</Link>
            <Link className="hover:text-neutral-900 text-neutral-600" href={"/contact"}>Contact</Link>
            {/* <DarkModeToggler/> */}
        </div>
     );
}
 
export default FooterContent;