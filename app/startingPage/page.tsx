import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
import me from "@/public/images/me.png"
import Script from "next/script"

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
})

export default function StartingPage() {
  return (
    <>
      <div id="box" className="top-0 left-0 bottom-0 right-0 absolute -z-10">
        <div
          id="dvd"
          className="bouncing_info bg-text text-white absolute w-32 p-5 text-center -z-10"
        >
          21 years old
        </div>
        <div
          id="dvd2"
          className="bouncing_info bg-text text-white absolute w-32 p-5 text-center -z-10"
        >
          born in berlin
        </div>
        <div
          id="dvd3"
          className="bouncing_info bg-text text-white relative w-32 p-5 text-center -z-10"
        >
          track & field athlete
        </div>
        <Script src="scripts/bouncing.js"></Script>
      </div>
      <div
        className={
          space_grotesk.className +
          " w-full flex flex-col justify-center gap-8 items-center h-[calc(100vh-128px)]"
        }
      >
        <Image src={me} alt="me as an memoji" width={120} height={120} className="" />
        <h1 className="text-6xl font-light text-center md:text-8xl">TOBIAS MEYHÖFER</h1>
        <p className="font-light text-2xl">Junior Developer</p>
      </div>
    </>
  )
}
