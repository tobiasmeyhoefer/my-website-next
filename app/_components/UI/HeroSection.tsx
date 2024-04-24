import me from "@/public/images/me.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex h-full flex-col justify-center">
      {/* <div className="section bg-red-300/0 absolute top-0 bottom-0 left-0 right-0 -z-50"></div> */}
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
        className="absolute -right-[40%] bottom-0 -z-10 w-[1200px] min-w-[800px] blur-[7px] xl:-bottom-1/4 xl:-right-[20%] 2xl:w-[1400px] "
        src={me}
        alt="portrait in comic style"
        width={1400}
        height={1400}
      />
      <div className="bluredUiCircles absolute left-1/4 -z-20 h-[30vw] w-[30vw] rounded-full bg-neutral-900/30 blur-[8vw]" />
    </section>
  );
};

export default HeroSection;
