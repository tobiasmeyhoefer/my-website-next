import SkillCircles from "../components/reusables/SkillCircles"

export default function skillsPage() {
  return (
    <div className="mt-40 mb-40">
      <div>
        <p className="font-bold text-xl mb-8">Legend</p>
        <p className="mb-12">1 - 3 basic knowledge, 3 - 6 good knowledge 6 - 9 deepdived knowledge, 10 I know everything (not possible)</p>
      </div>
      <h2 className="text-xl md:text-3xl font-semibold mb-16">PROGRAMMING LANGUAGES</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Java",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "C#",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "JavaScript",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "TypeScript",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Kotlin",
            circles: 4,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Swift",
            circles: 3,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Assembler",
            circles: 3,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">FRONTEND</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "React",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "NextJs",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: ".NET Blazor",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Angular",
            circles: 4,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "TailwindCSS",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Bootstrap",
            circles: 3,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "SCSS & SASS",
            circles: 7,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">BACKEND</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Express",
            circles: 5,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "MSQL",
            circles: 5,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "MongoDB",
            circles: 6,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">TESTING</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Jest",
            circles: 4,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "React Testing Library",
            circles: 5,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "C# Unit Testing",
            circles: 4,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">OTHER SKILLS</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Versioning with Git",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "CD & CI",
            circles: 5,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Docker",
            circles: 4,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Prompt Engineering",
            circles: 7,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">THEORETICAL KNOWLEDGE</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Algorithms",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Data Structures",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Relational Databases",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Software Design Principles",
            circles: 8,
          }}
        ></SkillCircles>
      </ul>
    </div>
  )
}
