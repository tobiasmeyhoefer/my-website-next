import me from "@/public/images/me.png"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <h1
        id="name"
        className="w-full max-w-screen-2xl leading-none px-10 font-montserrat font-bold italic text-white text-[10vw]"
      >
        TOBIAS MEYHOEFER
      </h1>
      <p className="text-2xl font-montserrat mt-8 pl-14">
        Junior Developer born & based in berlin with 3 years of coding
        experience
      </p>
      <Image className="absolute blur-sm bottom-0 -right-1/4" src={me} alt="portrait in comic style" width={1000} height={1000}/>
    </section>
  );
};

export default HeroSection;
