import me from "@/public/images/me.png";
import star from "@/public/svg/star1.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex h-full flex-col justify-center max-md:relative">
      <h1
        id="name"
        className="w-full max-w-screen-2xl px-6 font-montserrat text-[10vw] font-extrabold italic leading-none text-white md:px-12"
      >
        TOBIAS MEYHOEFER
      </h1>
      <p className="mr-4 mt-8 pl-7 font-montserrat text-2xl md:pl-12">
        Junior Developer born & based in berlin with 3 years of coding
        experience
      </p>
      <div className="absolute h-full w-full overflow-x-clip -z-40">
        <Image
          className="absolute -right-[40%] bottom-0 -z-10 min-w-[400px] blur-[4px] md:w-[1200px] md:blur-[7px] xl:-bottom-1/4 xl:-right-[20%] 2xl:w-[1400px]"
          src={me}
          alt="portrait in comic style"
          width={1300}
          height={1300}
        />
        <Image className="absolute object -z-50 top-20 left-0 w-[70vw]" src={star} alt="star icon"/>
      </div>
      <div className="bluredUiCircles absolute left-1/4 top-1/3 -z-20 h-[34vw] w-[30vw] rounded-full bg-neutral-900/40 blur-[8vw]" />
    </section>
  );
};

export default HeroSection;
