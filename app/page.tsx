import Script from "next/script";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";
import HeroSection from "./_components/UI/HeroSection";
import BentoSection from "./_components/UI/BentoSection";
import CVSection from "./_components/UI/CVSection";
import Skills from "./_components/UI/Skills";

export default function Home() {
  return (
    <>
      <FlyingInformations/>
      <HeroSection/>
      <CVSection/>
      <Skills/>
      <BentoSection/>
      {/* <div className="flex h-full flex-col justify-center gap-8 font-sans w-full max-w-[1920px]"> */}
        {/* <StartUpAnimation/> */}
        {/* <HeroSection/> */}
        {/* <ExperienceAndEducationSection/> */}
        {/* <Script src="scripts/charSwitching.js"></Script> */}
      {/* </div> */}
      {/* <ExperienceAndEducationSection/> */}
    </>
  );
}
