import Skills from "./Skills";

const CVSection = () => {
  return (
    <>
      <section className="section flex w-full flex-col bg-neutral-100 xl:flex-row max-md:pb-4">
        <div className="min-w-1/2 relative h-full bg-neutral-800 p-6 pt-12 md:p-12 xl:-top-32 xl:left-20">
          <h2 className="mb-10 font-montserrat text-4xl font-bold">
            Experience
          </h2>
          <div className="flex flex-col gap-4 md:mr-40 xl:mr-20">
            <p>
              Work_ Web developer at “Berliner Verkehrsbetriebe (BVG)”, active
              development of web applications to relieve various tasks of
              company employees
            </p>
            <p>
              Strength_ Fullstack Crud Applications in multiple frameworks
              (NextJs, Angular, .NET)
            </p>
            <p>
              Design_ Design Laws, gestalt principles, modern UI Design with
              TailwindCSS
            </p>

            <p className="z-20">
              Else_ Shell scripting (bash, zsh, Powershell), algorithms und data
              structures, ISO-OSI layer-model Protocolls, UML Diagrams, GraphQL,
              AWS
            </p>
            <p>Own website under development with Next.Js</p>
            <p>
              Developed journaling application called “Yournal“ for personal
              using to avoid paid models with Next.js App Router and newest
              technologies like Clerk and Drizzle
            </p>
            <p>
              Implemented a gesture-based voice-controlled drawing application
              written in processing to show the possibilities of human computer
              interaction
            </p>
            {/* <p className="z-20">
              Ray tracer developed in Java with the ability to display diffuse
              or reflective materials and thus generate images or videos
            </p>
            <p className="z-20">
              Application written with the Angular framework for managing admin
              rights in a company
            </p>
            <p className="z-20">
              AirBnb clone BetterBnb in Swift for IOS devices
            </p>
            <p className="z-20">
              CocktailApp in Kotlin with the JetpackCompose framework
            </p>
            <p className="z-20">
              Talking mirror - construction and software as an IOT device with
              communication via the MQTT protocol, room sensors and connection
              to an LLM, equipped with microphone and speaker
            </p>
            <p className="z-20">
              Advanced FrontEnd Development course during the semester abroad in
              Aarhus
            </p> */}
          </div>
          <div className="bluredUiCircles absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-neutral-400/30 blur-[100px]" />
        </div>
        <div className="z-10 w-full p-6 pt-12 text-neutral-900 md:p-12 lg:mt-0 xl:-mt-32 xl:ml-24">
          <h2 className="mb-12 mt-0 font-montserrat text-4xl font-bold md:mt-32">
            Education
          </h2>
          <div className="flex w-full flex-col">
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                2018
              </p>
              <p className="top-10 z-10 -mt-6">
                Graduation from Max-Delbrück Gymnasium Berlin
              </p>
            </div>
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                2021
              </p>
              <p className="top-10 z-10 -mt-6">
                Abitur at the Schul- und Leistungszentrum Berlin(SLZB, sports
                theory and biology)
              </p>
            </div>
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                until 2025
              </p>
              <p className="top-10 z-10 -mt-6">
                Media informatics at the Berlin University of Applied Sciences
              </p>
            </div>
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                2022
              </p>
              <p className="top-10 z-10 -mt-6">
                Student assistant at M&W Finanzoptimierung
              </p>
            </div>
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                since 2022
              </p>
              <p className="top-10 z-10 -mt-6">
                Web developer at Berliner Verkehrsbetriebe{" "}
                <span className="text-sm text-neutral-500">
                  active development of web applications to relieve various
                  tasks of company employees
                </span>
              </p>
            </div>
            <div className="items-en relative mb-2 flex flex-col">
              <p className="font-montserrat text-5xl text-accentGreen blur-[1px] md:text-6xl">
                2023
              </p>
              <p className="top-10 z-10 -mt-6">
                Semester abroad in Aarhus / Denmark in the field of software
                engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CVSection;
