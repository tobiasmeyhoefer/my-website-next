import SkillCircles from "../components/reusables/SkillCircles"

export default function skillsPage() {
  return (
    <div className="mt-40 mb-40">
      <h2 className="text-xl md:text-3xl font-semibold mb-16">programming languages</h2>
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
      </ul>
      <h2 className="text-xl md:text-3xl font-semibold my-16">Frameworks</h2>
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
            skill: ".Net Blazor",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Angular",
            circles: 4,
          }}
        ></SkillCircles>
      </ul>
    </div>
  )
}
