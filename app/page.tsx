import Script from "next/script";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";
import HeroSection from "./_components/UI/HeroSection";
import ExperienceAndEducationSection from "./_components/UI/ExperienceAndEducationSection";

export default function Home() {
  return (
    <div className="h-full">
      <FlyingInformations/>
      <div className="flex h-full flex-col justify-center gap-8 font-sans w-full max-w-[1920px]">
        {/* <StartUpAnimation/> */}
        <HeroSection/>
        {/* <ExperienceAndEducationSection/> */}
        {/* <Script src="scripts/charSwitching.js"></Script> */}
      </div>
      <ExperienceAndEducationSection/>
    </div>
  );
}
