import Image from "next/image";
import me from "@/public/images/me.png";
import Script from "next/script";
import FlyingInformations from "./_components/FlyingInformations";

export default function Home() {
  return (
    <div className="h-full">
      {/* <FlyingInformations/> */}
      <div className="flex h-full w-full flex-col justify-center gap-8 font-sans">
        {/* <Image
          src={me}
          alt="me as an memoji"
          width={120}
          height={120}
          className=""
        /> */}
        <div className="startup text-white">
          <p className="font-sans">TOBIAS</p>
          <p className="font-sans">MEYHOEFER</p>
        </div>
        <h1 id="name" className="font-sans text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[14rem] w-full max-w-screen-2xl text-white px-10">
          TOBIAS MEYHOEFER
        </h1>
        <Script src="scripts/charSwitching.js"></Script>
        <p className="text-2xl font-light">Junior Developer born & based in berlin with 3 years of coding experience</p>
      </div>
      <section className="bg-green text-white h-[600px] p-20 text-3xl">
        <h2 className="font-serif">Education</h2>
      </section>
    </div>

  );
}
