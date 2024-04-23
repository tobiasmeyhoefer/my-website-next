import Skills from "./Skills";

const CVSection = () => {
  return (
    <>
      <section className="flex h-[800px] w-full bg-neutral-100">
        <div className="relative -top-32 left-20 h-full min-w-1/2 bg-neutral-800 p-12">
          <h2 className="mb-10 font-montserrat text-3xl font-bold">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              numerous FullStack CRUD applications for BVG including public key
              infrastructure, on-call service, privileged access management,
              local admin authorisation written with Microsofts Blazor framework
              in C#
            </p>
            <p>Own website under development with Next.Js</p>
            <p>Fitness application FITNEXT written in the Next.Js framework</p>
            <p>
              gesture-based voice-controlled drawing application written in
              Processing
            </p>

            <p>
              MERN(MongoDB, ExpressJs, React, NodeJS) stack application as part
              of the WebEngineering II study module
            </p>
            <p>
              Ray tracer developed in Java with the ability to display diffuse
              or reflective materials and thus generate images or videos
            </p>
            <p>
              Application written with the Angular framework for managing admin
              rights in a company
            </p>
            <p>AirBnb clone BetterBnb in Swift for IOS devices</p>
            <p>CocktailApp in Kotlin with the JetpackCompose framework</p>
            <p>
              Talking mirror - construction and software as an IOT device with
              communication via the MQTT protocol, room sensors and connection
              to an LLM, equipped with microphone and speaker
            </p>
            <p>
              Advanced FrontEnd Development course during the semester abroad in
              Aarhus
            </p>
          </div>
        </div>
        <div className="ml-24 p-12 text-neutral-900 w-full">
          <h2 className="mb-12 font-montserrat text-3xl font-bold">
            Education
          </h2>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex items-en relative">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                2018
              </p>
              <p className="z-10 pl-16 absolute top-10 text-nowrap">
                Graduation from Max-Delbrück Gymnasium Berlin
              </p>
            </div>
            <div className="flex items-end relative">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                2021
              </p>
              <p className="z-10 pl-16 absolute top-10 text-nowrap">
                Abitur at the Schul- und Leistungszentrum Berlin(SLZB, sports
                theory and biology)
              </p>
            </div>
            <div className="flex items-end relative">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                2021 - ~2025
              </p>
              <p className="z-10 pl-16 absolute top-10 text-nowrap">
                Media informatics at the Berlin University of Applied Sciences
              </p>
            </div>
            <div className="flex items-end relative">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                2022
              </p>
              <p className="z-10 pl-16 absolute top-10 text-nowrap">
                Student assistant at M&W Finanzoptimierung
              </p>
            </div>
            <div className="flex items-end relative w-full">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                since 2022
              </p>
              <p className="z-10 pl-16 absolute top-10">
                Web developer at Berliner Verkehrsbetriebe active development of
                web applications to relieve various tasks of company employees
              </p>
            </div>
            <div className="flex items-end relative">
              <p className="text-accentGreen font-montserrat text-6xl blur-[1px]">
                2023
              </p>
              <p className="z-10 pl-16 absolute top-10 text-nowrap">
                Semester abroad in Aarhus / Denmark in the field of software engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CVSection;
