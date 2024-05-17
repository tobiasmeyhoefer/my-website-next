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

      <div className="h-full flex justify-center items-center">
        <div className="flex -translate-y-[140px] flex-col items-center justify-center p-20">
          <p className="text-[4vw] font-bold font-montserrat">TOBIAS MEYHÖFER</p>
          <p className="text-[2vw] font-light font-montserrat">Junior Web Developer</p>
          <div className="absolute bg-white rounded-full w-80 h-80 blur-2xl -bottom-1/4 right-10 opacity-40"></div>
        </div>
      </div>
      {/* <CVSection/>
      <Skills/> */}
      {/* <BentoSection/> */}
      {/* <StartUpAnimation/> */}
    </>
  );
}
