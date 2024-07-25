"use client";

import { useState } from "react";
import NextIcon from "./icons/NextIcon";
import ReactIcon from "./icons/ReactIcon";
import ShadCnIcon from "./icons/ShadCnIcon";
import TailwindIcon from "./icons/TailwindIcon";
import ZodIcon from "./icons/ZodIcon";
import { TechCard } from "./TechCard";
import { Button } from "./ui/button";
import ZustandIcon from "./icons/ZustandIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import NodeIcon from "./icons/NodeIcon";
import PostGreSQLIcon from "./icons/PostGresSQLIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import NeonIcon from "./icons/NeonIcon";

export enum Category {
  WebFramework = "Web Framework",
  StateManagement = "State Management",
  Utility = "Utility",
  Design = "Design",
  Database = "Database",
  ComponentLibrary = "Component Library",
  ProgrammingLanguage = "Programming Language",
}

const SortedTechPage = () => {
  type TechItem = {
    name: string;
    description: string;
    category: Category[];
    href: string;
    imageComponent: React.ComponentType;
  };

  const techList: TechItem[] = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      category: [Category.WebFramework],
      href: "https://reactjs.org/",
      imageComponent: ReactIcon,
    },
    {
      name: "Next.Js",
      description: "The Progressive JavaScript Framework",
      category: [Category.WebFramework],
      href: "https://nextjs.org/",
      imageComponent: NextIcon,
    },
    {
      name: "ShadCn",
      description: "Beautifully designed components for copy and paste",
      category: [Category.ComponentLibrary, Category.Design],
      href: "https://ui.shadcn.com/",
      imageComponent: ShadCnIcon,
    },
    {
      name: "TailwindCSS",
      description: "One framework. Mobile & desktop",
      category: [Category.Design],
      href: "https://tailwindcss.com/",
      imageComponent: TailwindIcon,
    },
    {
      name: "Zod",
      description: "TypeScript-first schema declaration and validation library",
      category: [Category.Utility],
      href: "https://zod.dev/",
      imageComponent: ZodIcon,
    },
    {
      name: "Zustand",
      description:
        "small, fast and scalable bearbones state-management solution",
      category: [Category.StateManagement],
      href: "https://zustand-demo.pmnd.rs/",
      imageComponent: ZustandIcon,
    },
    {
      name: "Typescript",
      description:
        "strongly typed programming language that builds on JavaScript",
      category: [Category.ProgrammingLanguage],
      href: "https://www.typescriptlang.org/",
      imageComponent: TypescriptIcon,
    },
    {
      name: "Node.js",
      description:
        "free, open-source, cross-platform JavaScript runtime environment",
      category: [Category.Utility],
      href: "https://nodejs.org/en",
      imageComponent: NodeIcon,
    },
    {
      name: "PostgreSQL",
      description: "powerful, open source object-relational database system",
      category: [Category.Database],
      href: "https://www.postgresql.org/",
      imageComponent: PostGreSQLIcon,
    },
    {
      name: "Supabase",
      description: "TypeScript-first schema declaration and validation library",
      category: [Category.Database],
      href: "https://supabase.com/",
      imageComponent: SupabaseIcon,
    },
    {
      name: "NeonDb",
      description: "serverless postgress database",
      category: [Category.Database],
      href: "https://neon.tech/",
      imageComponent: NeonIcon,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  return (
    <section className="">
      <div className="mb-6 flex flex-wrap gap-4">
        <Button variant={"secondary"} onClick={() => setSelectedCategory(null)}>
          Show All
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.WebFramework)}
        >
          Web Framework
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.Utility)}
        >
          Utility
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.Design)}
        >
          Design
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.Database)}
        >
          Database
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.ComponentLibrary)}
        >
          Component Library
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.ProgrammingLanguage)}
        >
          Programming Language
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {techList
          .filter(
            (tech) =>
              selectedCategory === null ||
              tech.category.includes(selectedCategory),
          )
          .map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              href={tech.href}
              ImageComponent={tech.imageComponent}
              category={tech.category}
            />
          ))}
      </div>
    </section>
  );
};

export default SortedTechPage;
