import me from "@/public/images/me.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex h-full flex-col justify-center max-md:relative">
      <h1
        id="name"
        className="w-full max-w-screen-2xl px-10 font-montserrat text-[10vw] font-extrabold italic leading-none text-white"
      >
        TOBIAS MEYHOEFER
      </h1>
      <p className="mt-8 pl-12 font-montserrat text-2xl md:pl-14">
        Junior Developer born & based in berlin with 3 years of coding
        experience
      </p>
      <Image
        className="absolute -right-[40%] bottom-0 -z-10 min-w-[400px] blur-[4px] md:blur-[7px] md:w-[1200px] xl:-bottom-1/4 xl:-right-[20%] 2xl:w-[1400px] "
        src={me}
        alt="portrait in comic style"
        width={1300}
        height={1300}
      />
      <div className="bluredUiCircles absolute left-1/4 -z-20 h-[30vw] w-[30vw] rounded-full bg-neutral-900/30 blur-[8vw]" />
    </section>
  );
};

export default HeroSection;
