import me from "@/public/images/me.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <h1
        id="name"
        className="w-full max-w-screen-2xl px-10 font-montserrat text-[10vw] font-bold italic leading-none text-white"
      >
        TOBIAS MEYHOEFER
      </h1>
      <p className="mt-8 pl-14 font-montserrat text-2xl">
        Junior Developer born & based in berlin with 3 years of coding
        experience
      </p>
      <div className="absolute top-0 bottom-0 right-0 left-0 -z-10">
        <Image
          className="absolute -right-0 bottom-0 blur-[7px] w-[900px] xl:w-[1200px] translate-x-1/3 translate-y-1/4 -z-10"
          src={me}
          alt="portrait in comic style"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default HeroSection;
