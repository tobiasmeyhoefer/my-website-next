import Image from "next/image";
import me from "@/public/images/me.png";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import FlyingInformations from "./_components/FlyingInformations";

export default function Home() {
  return (
    <div className="h-full">
      <FlyingInformations/>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 font-sans">
        <Image
          src={me}
          alt="me as an memoji"
          width={120}
          height={120}
          className=""
        />
        <div className="startup">
          <p className="font-serif">TOBIAS</p>
          <p className="font-serif">MEYHOEFER</p>
        </div>
        <h1 className="text-center font-serif text-6xl md:text-8xl">
          TOBIAS MEYHOEFER
        </h1>
        <p className="text-2xl font-light text-center">Junior Developer born & based in berlin with 3 years of coding experience</p>
      </div>
      <section className="bg-green text-white h-[600px] p-20 text-3xl">
        <h2 className="font-serif">Education</h2>
      </section>
    </div>
  );
}
