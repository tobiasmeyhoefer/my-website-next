import TestAnimation from "@/components/animations/test-animation";
import { TypingEffect } from "@/components/animations/typing-effect";
import Image from "next/image";
import star from "@/public/svg/star.svg";
import TestAnimation2 from "@/components/animations/test-animation2";
import ScrollAnimation from "@/components/animations/test-animation2";

export default function Home() {
  return (
    <>
      {/* <FlyingInformations/> */}
      {/* <HeroSection/> */}
      {/* <TestAnimation> */}
      <section className="flex h-[calc(100vh-140px)] flex-col items-center justify-center">
        {/* <TestAnimation> */}
        <div className="relative flex -translate-y-[140px] flex-col items-center justify-center">
          <TypingEffect />
          <p className="font-montserrat text-sm font-light lg:text-2xl 2xl:text-5xl">
            Junior Web Developer
          </p>
          <div className="absolute -bottom-[140%] -right-[10%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl lg:h-60 lg:w-60 lg:opacity-60 xl:-right-[0%] 2xl:h-80 2xl:w-80"></div>
          <div className="absolute -left-[14%] -top-[120%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl lg:h-40 lg:w-40 lg:opacity-60 2xl:h-60 2xl:w-60"></div>
          {/* <div className="absolute left-[-30%] top-[240%] h-40 w-40 rounded-full bg-black opacity-80 blur-3xl lg:h-60 lg:w-60 lg:opacity-40 2xl:h-60 2xl:w-60"></div> */}
        </div>
        {/* </TestAnimation> */}
        <Image
          className="absolute top-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]"
          src={star}
          alt="star image"
          width={500}
          height={500}
        />
      </section>
      <section className="mb-10">
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-2 text-3xl font-bold">Skills</h2>
          <h3 className="font-bold">Programming Languages_</h3>
          <p>Javascript/Typescript, C#, Java, Swift, Kotlin</p>
          <h3 className="font-bold">Technologies_ </h3>
          <p>
            HTML, CSS, SQL, MongoDB, PostGreSQL, VS-code, Git, Github, Gitlab,
            MacOS, Windows, Linux
          </p>
          <h3 className="font-bold">Frameworks_</h3>
          <p>
            React, Next.js, Angular, Express, .NET, Auth.js, Zod, Node.js,
            TailwindCSS, Sass, Drizzle, Prisma
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-2 text-3xl font-bold">Work & Experience</h2>
          <h3 className="font-bold">Work_</h3>
          <p>
            Web developer at “Berliner Verkehrsbetriebe (BVG)”, active
            development of web applications to relieve various tasks of company
            employees
          </p>
          <h3 className="font-bold">Strength_ </h3>
          <p>
            Fullstack CRUD Applications in multiple frameworks (Next.js,
            Angular, .NET)
          </p>
          <h3 className="font-bold">Design_ </h3>
          <p>
            Design Laws, gestalt principles, modern UI Design with TailwindCSS
          </p>
          <h3 className="font-bold">Else_ </h3>
          <p>
            Shell scripting (bash, zsh, Powershell), algorithms und data
            structures, ISO-OSI layer-model Protocolls, UML Diagrams, GraphQL,
            AWS, Scrum
          </p>
        </ScrollAnimation>
        <hr className="my-10" />
        <ScrollAnimation>
          <h2 className="mb-2 text-3xl font-bold">Projects</h2>
          <p>
            <span className="font-bold">Developed</span> journaling application
            called “Yournal“ for personal using to avoid paid models, build with
            Next.js App Router and newest technologies like Clerk and Drizzle
          </p>
          <p>
            <span className="font-bold">Implemented</span> a gesture-based
            voice-controlled drawing application written in processing to show
            the possibilities of human computer interaction
          </p>
          <p>
            <span className="font-bold">Engineered</span> applications in
            Next.js and Angular to solve admin problems as part of abroad
            semester in Aarhus
          </p>
          <p>
            <span className="font-bold">Constructed</span> a talking mirror as
            an IOT device with communication via the MQTT protocol, sensors and
            connection to LLM, with microphone and speaker
          </p>
          <p>
            <span className="font-bold">Coded</span> a cocktail Application in
            Kotlin with the new Jetpack-Compose Framework
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-2 text-3xl font-bold">Else</h2>
          <h3 className="font-bold">Languages_</h3>
          <p>
            German (native), English (fluent), Danish (basics), Turkish (basics)
          </p>
          <h3 className="font-bold">since 2021_ </h3>
          <p>
            Studying media-based computer science at Berliner Hochschule für
            Technik, German Grade System: 1.4, US Grade System: 3.6{" "}
          </p>
          <h3 className="font-bold">2023_</h3>
          <p>
            Semester abroad in Aarhus/Denmark to improve social-cultural
            knowledge
          </p>
        </ScrollAnimation>
      </section>
      {/* </TestAnimation> */}
      {/* <CVSection/>
      <Skills/> */}
      {/* <BentoSection/> */}
      {/* <StartUpAnimation/> */}
    </>
  );
}
