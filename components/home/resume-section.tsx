import ScrollAnimation from "@/components/animations/scroll-animation";
import Link from "next/link";

const ResumeSection = () => {
  return (
    <>
      {" "}
      <section className="mb-10">
        <div id="currently_cooking" className="pt-40">
          <h2 className="mb-4 w-fit bg-amber-100 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            currently cooking 👨🏼‍🍳
          </h2>
        </div>

        <ul className="list-disc pl-5">
          <li>Youtube content</li>
          <li>Bachelor Thesis</li>
          <li>building awesome LP`s</li>
        </ul>
        <hr className="my-10 dark:border-neutral-700" />
      </section>
      <section id="resume-area" className="mb-20">
        {/* <h2 className="mb-10 text-3xl font-bold">Resume Area 📝</h2> */}
        <ScrollAnimation>
          <h2 className="mb-4 w-fit bg-amber-100 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Skills
          </h2>
          <h3 className="font-bold">Programming Languages_</h3>
          <p>Javascript/Typescript, C# and Java</p>
          <h3 className="font-bold">more Technologies_ </h3>
          <p>
            HTML, CSS, SQL, MongoDB, PostGreSQL, VS Code, Git, Github, all major
            operating systems
          </p>
          <h3 className="font-bold">Frameworks and Librarys_</h3>
          <p>
            React and Next.js, several auth frameworks, Zod, Tanstack Query,
            Zustand, TailwindCSS, Sass, Drizzle
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 w-fit bg-amber-100 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Work & Experience
          </h2>
          <h3 className="font-bold">Work_</h3>
          <p className="mb-1">
            see{" "}
            <Link
              className="text-yellow-600 dark:text-brand "
              href={"/changelog"}
            >
              changelog
            </Link>
          </p>
          {/* <p className="mb-1">
            since 2024: Peaks & Pies, working as a fullstack webdeveloper on
            enterprise landing page conversion optimization for multiple
            international companies with Next.js and Sanity
          </p>
          <p className="mb-1">
            2022 - 2024: Web developer at “Berliner Verkehrsbetriebe (BVG)”,
            active development of web applications to relieve various tasks of
            company employees
          </p> */}
          <h3 className="font-bold">Strength_ </h3>
          <p className="mb-1">
            building fast and reliable fullstack applications with cutting edge
            technology that scales easily up
          </p>
          <h3 className="font-bold">Design_ </h3>
          <p className="mb-1">
            Design Laws, gestalt principles, modern UI design
          </p>
          <h3 className="font-bold">Else_ </h3>
          <p className="mb-1">
            Shell scripting (bash, zsh, powershell), algorithms und data
            structures, ISO-OSI layer-model Protocolls, UML Diagrams, GraphQL,
            AWS, Scrum
          </p>
        </ScrollAnimation>
        <hr className="my-10 dark:border-neutral-700" />
        {/* <ScrollAnimation>
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Created
            </span>{" "}
            my own youtube channel called tobi tackles tech
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Implemented
            </span>{" "}
            10+ study projects from small ones like simple crud applications to
            a whole buy and sell application with authentication, integrated
            payment- and realtime messaging system
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Engineered
            </span>{" "}
            my own website last year
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Constructed and Developed
            </span>{" "}
            a journaling application called Yournal for personal use with
            technologies like Next.js, Clerk or Drizzle
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Coded
            </span>{" "}
            waki, a flashcard learning app for spaced repetition also with
            Next.js and newest technologies and optimzations
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation>
          {/* <hr className="my-10 dark:border-neutral-700" /> */}
          <h2 className="mb-4 w-fit bg-amber-100 p-1 text-2xl font-bold dark:bg-brand dark:text-black">
            Else
          </h2>
          <h3 className="font-bold">Languages_</h3>
          <p className="mb-1">
            German (native), English (fluent), Danish (basics), Turkish (basics)
          </p>
          <h3 className="font-bold">since 2021_ </h3>
          <p className="mb-1">
            Studying media-based computer science at Berliner Hochschule für
            Technik, German Grade System: 1.4, US Grade System: 3.6{" "}
          </p>
          <h3 className="font-bold">2023_</h3>
          <p className="mb-1">
            Semester abroad in Aarhus/Denmark to improve social-cultural
            knowledge
          </p>
        </ScrollAnimation>
      </section>{" "}
    </>
  );
};

export default ResumeSection;
