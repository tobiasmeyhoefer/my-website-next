import Script from "next/script";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";
import HeroSection from "./_components/UI/HeroSection";
import BentoSection from "./_components/UI/BentoSection";
import Skills from "./_components/UI/Skills";
import CVSection from "./_components/UI/CVSection";

export default function Home() {
  return (
    <>
      {/* <FlyingInformations/> */}
      {/* <HeroSection/> */}

      <div className="flex h-full items-center justify-center">
        <div className="flex -translate-y-[140px] flex-col items-center justify-center">
          <p className="font-montserrat text-[4vw] font-bold">
            TOBIAS MEYHÖFER
          </p>
          <p className="font-montserrat text-[2vw] font-light">
            Junior Web Developer
          </p>
          <div
            className="h-[20vw] absolute -bottom-[150%] -right-[10%]
            w-[20vw] rounded-full bg-white opacity-40 blur-2xl"
          ></div>
          <div
            className="h-[20vw] absolute -top-[150%] -left-[10%]
            w-[20vw] rounded-full bg-white opacity-30 blur-2xl"
          ></div>
        </div>
      </div>
      {/* <CVSection/>
      <Skills/> */}
      {/* <BentoSection/> */}
      {/* <StartUpAnimation/> */}
    </>
  );
}
