import Script from "next/script";
import FlyingInformations from "./_components/UI/FlyingInformations";
import StartUpAnimation from "./_components/UI/StartUpAnimation";
import HeroSection from "./_components/UI/HeroSection";

export default function Home() {
  return (
    <div className="h-full flex justify-center">
      {/* <FlyingInformations/> */}
      <div className="flex h-full flex-col justify-center gap-8 font-sans w-full max-w-[1920px] px-4 md:px-12">
        {/* <StartUpAnimation/> */}
        <HeroSection/>
        {/* <Script src="scripts/charSwitching.js"></Script> */}
      </div>
    </div>
  );
}
