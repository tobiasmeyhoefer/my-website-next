import Skills from "./Skills";

const CVSection = () => {
  return (
    <>
      <section className="section flex w-full flex-col bg-neutral-100 xl:flex-row">
        <div className="min-w-1/2 relative -top-32 h-full bg-neutral-800 p-12 xl:left-20">
          <h2 className="mb-10 font-montserrat text-4xl font-bold">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            <p className="z-20">
              numerous FullStack CRUD applications for BVG including public key
              infrastructure, on-call service, privileged access management,
              local admin authorisation written with Microsofts Blazor framework
              in C#
            </p>
            <p className="z-20">Own website under development with Next.Js</p>
            <p>Fitness application FITNEXT written in the Next.Js framework</p>
            <p>
              gesture-based voice-controlled drawing application written in
              Processing
            </p>

            <p className="z-20">
              MERN(MongoDB, ExpressJs, React, NodeJS) stack application as part
              of the WebEngineering II study module
            </p>
            <p className="z-20">
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
            </p>
          </div>
          <div className="bluredUiCircles absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-neutral-400/30 blur-[100px]" />
        </div>
        <div className="-mt-32 w-full p-12 text-neutral-900 lg:mt-0 xl:ml-24 z-10">
          <h2 className="mb-12 font-montserrat text-4xl font-bold">
            Education
          </h2>
          <div className="flex w-full flex-col gap-8">
            <div className="items-en relative flex">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                2018
              </p>
              <p className="absolute top-10 z-10 pl-16">
                Graduation from Max-Delbrück Gymnasium Berlin
              </p>
            </div>
            <div className="relative flex items-end">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                2021
              </p>
              <p className="absolute top-10 z-10 pl-16">
                Abitur at the Schul- und Leistungszentrum Berlin(SLZB, sports
                theory and biology)
              </p>
            </div>
            <div className="relative flex items-end">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                until 2025
              </p>
              <p className="absolute top-10 z-10 pl-16">
                Media informatics at the Berlin University of Applied Sciences
              </p>
            </div>
            <div className="relative flex items-end">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                2022
              </p>
              <p className="absolute top-10 z-10 pl-16">
                Student assistant at M&W Finanzoptimierung
              </p>
            </div>
            <div className="relative flex w-full items-end">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                since 2022
              </p>
              <p className="absolute top-10 z-10 pl-16">
                Web developer at Berliner Verkehrsbetriebe active development of
                web applications to relieve various tasks of company employees
              </p>
            </div>
            <div className="relative flex items-end">
              <p className="font-montserrat text-6xl text-accentGreen blur-[1px]">
                2023
              </p>
              <p className="absolute top-10 z-10 pl-16">
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
