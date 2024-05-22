import { TypingEffect } from "@/components/animations/typing-effect";
import Image from "next/image";
import star from "@/public/svg/star.svg";
import ScrollAnimation from "@/components/animations/scroll-animation";
import Drag from "@/components/drag/drag-component";

export default function Home() {
  return (
    <>
      <section className="flex h-[calc(100vh-140px)] flex-col items-center justify-center">
        <div className="relative flex -translate-y-[140px] flex-col items-center justify-center">
          <TypingEffect />
          <p className="font-montserrat text-sm font-light lg:text-2xl 2xl:text-5xl">
            Junior Web Developer
          </p>
          <div className="absolute left-[70%] top-[20%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl lg:left-[65%] lg:top-[30%] lg:size-60 2xl:left-[73%] 2xl:top-[40%] 2xl:size-80"></div>
          <div className="2xl:-left-[14%]] absolute left-[-20%] top-[-40%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl lg:left-[-15%] lg:top-[-120%] lg:size-40 2xl:-top-[120%] 2xl:size-60"></div>
        </div>
        <div className="absolute translate-y-[100px] md:translate-y-[150px]">
          <Drag>
            <Image
              className="pointer-events-none h-[200px] w-[200px] select-none lg:h-[300px] lg:w-[300px]"
              src={star}
              alt="star image"
              width={200}
              height={200}
            />
          </Drag>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-3xl font-bold">Resume Area</h2>
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <h3 className="font-bold bg-amber-100 w-fit">Programming Languages_</h3>
          <p>Javascript/Typescript, C#, Java, Swift, Kotlin</p>
          <h3 className="font-bold bg-amber-100 w-fit">Technologies_ </h3>
          <p>
            HTML, CSS, SQL, MongoDB, PostGreSQL, VS-code, Git, Github, Gitlab,
            MacOS, Windows, Linux
          </p>
          <h3 className="font-bold bg-amber-100 w-fit">Frameworks_</h3>
          <p>
            React, Next.js, Angular, Express, .NET, Auth.js, Zod, Node.js,
            TailwindCSS, Sass, Drizzle, Prisma
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-4 text-2xl font-bold">Work & Experience</h2>
          <h3 className="font-bold bg-fuchsia-100 w-fit">Work_</h3>
          <p>
            Web developer at “Berliner Verkehrsbetriebe (BVG)”, active
            development of web applications to relieve various tasks of company
            employees
          </p>
          <h3 className="font-bold bg-fuchsia-100 w-fit">Strength_ </h3>
          <p>
            Fullstack CRUD Applications in multiple frameworks (Next.js,
            Angular, .NET)
          </p>
          <h3 className="font-bold bg-fuchsia-100 w-fit">Design_ </h3>
          <p>
            Design Laws, gestalt principles, modern UI Design with TailwindCSS
          </p>
          <h3 className="font-bold bg-fuchsia-100 w-fit">Else_ </h3>
          <p>
            Shell scripting (bash, zsh, Powershell), algorithms und data
            structures, ISO-OSI layer-model Protocolls, UML Diagrams, GraphQL,
            AWS, Scrum
          </p>
        </ScrollAnimation>
        <hr className="my-10" />
        <ScrollAnimation>
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <p>
            <span className="font-bold bg-emerald-100 w-fit">Developed</span> journaling application
            called “Yournal“ for personal using to avoid paid models, build with
            Next.js App Router and newest technologies like Clerk and Drizzle
          </p>
          <p>
            <span className="font-bold bg-emerald-100 w-fit">Implemented</span> a gesture-based
            voice-controlled drawing application written in processing to show
            the possibilities of human computer interaction
          </p>
          <p>
            <span className="font-bold bg-emerald-100 w-fit">Engineered</span> applications in
            Next.js and Angular to solve admin problems as part of abroad
            semester in Aarhus
          </p>
          <p>
            <span className="font-bold bg-emerald-100 w-fit">Constructed</span> a talking mirror as
            an IOT device with communication via the MQTT protocol, sensors and
            connection to LLM, with microphone and speaker
          </p>
          <p>
            <span className="font-bold bg-emerald-100 w-fit">Coded</span> a cocktail Application in
            Kotlin with the new Jetpack-Compose Framework
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10" />
          <h2 className="mb-4 text-2xl font-bold">Else</h2>
          <h3 className="font-bold bg-blue-100 w-fit">Languages_</h3>
          <p>
            German (native), English (fluent), Danish (basics), Turkish (basics)
          </p>
          <h3 className="font-bold bg-blue-100 w-fit">since 2021_ </h3>
          <p>
            Studying media-based computer science at Berliner Hochschule für
            Technik, German Grade System: 1.4, US Grade System: 3.6{" "}
          </p>
          <h3 className="font-bold bg-blue-100 w-fit">2023_</h3>
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
