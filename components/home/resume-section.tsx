import ScrollAnimation from "@/components/animations/scroll-animation";

const ResumeSection = () => {
  return (
    <>
      {" "}
      <section className="mb-10">
        <h2 id="currently_cooking" className="mb-4 pt-10 text-3xl font-bold">
          currently cooking 👨🏼‍🍳
        </h2>
        <ul className="list-disc pl-5">
          <li>Youtube content</li>
          <li>Bachelor Thesis</li>
          <li>Waki Cards, flashcard application</li>
        </ul>
        <hr className="my-10 dark:border-neutral-700" />
      </section>
      <section id="resume-area" className="mb-20">
        <h2 className="mb-10 text-3xl font-bold">Resume Area 📝</h2>
        <ScrollAnimation>
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <h3 className="w-fit bg-amber-100 font-bold dark:bg-amber-900">
            Programming Languages_
          </h3>
          <p>
            Javascript/Typescript, C#, Java and basic knowledge in Swift, Kotlin
          </p>
          <h3 className="w-fit bg-amber-100 font-bold dark:bg-amber-900">
            Technologies_{" "}
          </h3>
          <p>
            HTML, CSS, SQL, MongoDB, PostGreSQL, VS-Code, Git, Github, Gitlab,
            and all operating systems
          </p>
          <h3 className="w-fit bg-amber-100 font-bold dark:bg-amber-900">
            Frameworks_
          </h3>
          <p>
            React, Next.js, Express, .NET, Auth.js, Zod, TailwindCSS, Sass,
            Drizzle
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 text-2xl font-bold">Work & Experience</h2>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Work_
          </h3>
          <p className="mb-1">
            currently_ writing my bachelor thesis: impact of rendering
            strategies in Next.js
          </p>
          <p className="mb-1">
            since 2024: Peaks & Pies, working as a fullstack webdeveloper on
            enterprise landing page conversion optimization for multiple
            international companies with Next.js and Sanity
          </p>
          <p className="mb-1">
            2022 - 2024: Web developer at “Berliner Verkehrsbetriebe (BVG)”,
            active development of web applications to relieve various tasks of
            company employees
          </p>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Strength_{" "}
          </h3>
          <p className="mb-1">
            Fullstack CRUD Applications in multiple frameworks (Next.js,
            Angular, .NET)
          </p>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Design_{" "}
          </h3>
          <p className="mb-1">
            Design Laws, gestalt principles, modern UI Design with TailwindCSS
          </p>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Else_{" "}
          </h3>
          <p className="mb-1">
            Shell scripting (bash, zsh, Powershell), algorithms und data
            structures, ISO-OSI layer-model Protocolls, UML Diagrams, GraphQL,
            AWS, Scrum
          </p>
        </ScrollAnimation>
        <hr className="my-10 dark:border-neutral-700" />
        <ScrollAnimation>
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
        </ScrollAnimation>
        <ScrollAnimation>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 text-2xl font-bold">Else</h2>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            Languages_
          </h3>
          <p className="mb-1">
            German (native), English (fluent), Danish (basics), Turkish (basics)
          </p>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            since 2021_{" "}
          </h3>
          <p className="mb-1">
            Studying media-based computer science at Berliner Hochschule für
            Technik, German Grade System: 1.4, US Grade System: 3.6{" "}
          </p>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            2023_
          </h3>
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
