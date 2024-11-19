import Image from "next/image";
import star from "@/public/svg/star.svg";
import ScrollDown from "@/components/ui/scroll-down";
import ResumeSection from "@/components/home/resume-section";

export default function Home() {
  return (
    <>
      {/* <BackgroundBeamsWithCollision> */}
        <section className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center">
          <div className="relative flex -translate-y-[120px] flex-col items-center justify-center md:-translate-y-[120px]">
            {/* <TypingEffect /> */}
            <h1 className="mb-2 text-center font-montserrat text-2xl font-bold tracking-[-0.02em] drop-shadow-sm lg:text-5xl xl:mb-4 2xl:text-7xl">
              TOBIAS MEYHÖFER
            </h1>
            <p className="relative font-montserrat text-sm font-light lg:text-xl 2xl:text-3xl">
              web developer and content creator
            </p>
            {/* <div className="pointer-events-none absolute left-[70%] top-[20%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl dark:bg-background lg:left-[65%] lg:top-[30%] lg:size-60 2xl:left-[73%] 2xl:top-[40%] 2xl:size-80"></div> */}
            {/* <div className="2xl:-left-[14%]] pointer-events-none absolute left-[-20%] top-[-40%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl dark:bg-background lg:left-[-15%] lg:top-[-120%] lg:size-40 2xl:-top-[120%] 2xl:size-60"></div> */}
          </div>
          <div className="absolute translate-y-[100px] md:translate-y-[150px]">
            {/* <Drag> */}
            <Image
              className="pointer-events-none h-[200px] w-[200px] select-none dark:brightness-200 lg:h-[300px] lg:w-[300px]"
              src={star}
              alt="star image"
              width={200}
              height={200}
            />
            {/* </Drag> */}
          </div>
          <ScrollDown />
        </section>
      {/* </BackgroundBeamsWithCollision> */}
      <ResumeSection />
    </>
  );
}
