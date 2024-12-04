import ScrollDown from "@/components/ui/scroll-down";
import ResumeSection from "@/components/home/resume-section";
import { Vortex } from "@/components/ui/vortex";
import BlurIn from "@/components/ui/blur-in";
import Star from "@/components/star";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <>
      <section className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center">
        {/* <Spotlight className="left-0 top-48" fill="#888888" /> */}
        <div className="hidden dark:block">
          <Vortex
            particleCount={40}
            baseHue={480}
            rangeY={30}
            backgroundColor="black"
            rangeSpeed={1}
          />
        </div>
        <div className="relative flex -translate-y-[120px] flex-col items-center justify-center md:-translate-y-[120px]">
          <BlurIn
            word="TOBIAS MEYHÖFER"
            className="text-center font-montserrat text-2xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl xl:mb-4 2xl:text-7xl"
          />
          <BlurIn
            duration={1}
            word="web developer and content creator"
            className="relative font-montserrat text-sm font-light md:text-2xl 2xl:text-3xl"
          />
        </div>
        <div className="absolute translate-y-[100px] md:translate-y-[150px]">
          {/* <Image
            className="pointer-events-none h-[200px] w-[200px] select-none dark:brightness-200 lg:h-[300px] lg:w-[300px]"
            src={star}
            alt="star image"
            width={200}
            height={200}
          /> */}
          <Star className="h-[200px] w-[200px] select-none  lg:h-[300px] lg:w-[300px]" />
        </div>
        <ScrollDown />
      </section>
      <ResumeSection />
    </>
  );
}
