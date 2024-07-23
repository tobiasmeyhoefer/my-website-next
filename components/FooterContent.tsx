import Link from "next/link";
import { DarkModeToggler } from "./DarkModeToggler";

const FooterContent = () => {
    return ( 
        <div className="flex gap-4 items-center justify-end p-4 h-20">
            <Link className="hover:text-zinc-700" href={"/contact"}>Contact</Link>
            <DarkModeToggler/>
        </div>
     );
}
 
export default FooterContent;