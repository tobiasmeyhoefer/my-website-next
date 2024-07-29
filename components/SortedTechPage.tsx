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
import VercelIcon from "./icons/VercelIcon";
import TwilioIcon from "./icons/TwilioIcon";
import ResendIcon from "./icons/ResendIcon";
import SentryIcon from "./icons/SentryIcon";
import AuthJsIcon from "./icons/AuthJsIcon";
import ClerkIcon from "./icons/ClerkIcon";
import FramerMotionIcon from "./icons/FramerMotionIcon";
import MagicUiIcon from "./icons/MagicUiIcon";
import AceternityIcon from "./icons/AceternityIcon";
import PosthogIcon from "./icons/PosthogIcon";
import UpstashIcon from "./icons/UpstashIcon";
import NextIntlIcon from "./icons/NextIntlIcon";
import StripeIcon from "./icons/StripeIcon";
import PusherIcon from "./icons/PusherIcon";
import ThreeIcon from "./icons/ThreeIcon";
import FigmaIcon from "./icons/FigmaIcon";
import NotionIcon from "./icons/NotionIcon";
import DrizzleIcon from "./icons/DrizzleIcon";
import ReactEmailIcon from "./icons/ReactEmailIcon";

export enum Category {
  Framework = "Framework",
  Utility = "Utility",
  Design = "Design",
  Backend = "Backend",
  Authentication = "Authentication",
  ComponentLibrary = "Component Library",
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
      category: [Category.Framework],
      href: "https://reactjs.org/",
      imageComponent: ReactIcon,
    },
    {
      name: "Next.Js",
      description: "The Progressive JavaScript Framework",
      category: [Category.Framework],
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
      category: [Category.Utility],
      href: "https://zustand-demo.pmnd.rs/",
      imageComponent: ZustandIcon,
    },
    {
      name: "Typescript",
      description:
        "strongly typed programming language that builds on JavaScript",
      category: [Category.Utility],
      href: "https://www.typescriptlang.org/",
      imageComponent: TypescriptIcon,
    },
    {
      name: "Node.js",
      description:
        "free, open-source, cross-platform JavaScript runtime environment",
      category: [Category.Backend],
      href: "https://nodejs.org/en",
      imageComponent: NodeIcon,
    },
    {
      name: "PostgreSQL",
      description: "powerful, open source object-relational database system",
      category: [Category.Backend],
      href: "https://www.postgresql.org/",
      imageComponent: PostGreSQLIcon,
    },
    {
      name: "Supabase",
      description: "TypeScript-first schema declaration and validation library",
      category: [Category.Backend],
      href: "https://supabase.com/",
      imageComponent: SupabaseIcon,
    },
    {
      name: "NeonDb",
      description: "serverless postgress database",
      category: [Category.Backend],
      href: "https://neon.tech/",
      imageComponent: NeonIcon,
    },
    {
      name: "Vercel",
      description: "developer tools and cloud infrastructure to build and scale",
      category: [Category.Backend],
      href: "https://vercel.com/",
      imageComponent: VercelIcon,
    },
    {
      name: "Twilio",
      description: "industry-leading sms sending",
      category: [Category.Utility],
      href: "https://neon.tech/",
      imageComponent: TwilioIcon,
    },
    {
      name: "Resend",
      description: "email for developers",
      category: [Category.Utility],
      href: "https://resend.com/",
      imageComponent: ResendIcon,
    },
    {
      name: "Sentry",
      description: "Application monitoring software",
      category: [Category.Utility],
      href: "https://sentry.io/",
      imageComponent: SentryIcon,
    },
    {
      name: "Auth.Js",
      description: "serverless postgress database",
      category: [Category.Authentication],
      href: "https://authjs.dev/",
      imageComponent: AuthJsIcon,
    },
    {
      name: "Clerk",
      description: "most comprehensive User Management Platform",
      category: [Category.Authentication],
      href: "https://clerk.com/",
      imageComponent: ClerkIcon,
    },
    {
      name: "Framer Motion",
      description: "A production-ready motion library for React",
      category: [Category.Design],
      href: "https://www.framer.com/motion/",
      imageComponent: FramerMotionIcon,
    },
    {
      name: "Magic UI",
      description: "UI library for Design Engineers",
      category: [Category.Design],
      href: "https://magicui.design/",
      imageComponent: MagicUiIcon,
    },
    {
      name: "Aceternity UI",
      description: "Make your websites look 10x better",
      category: [Category.Design],
      href: "https://ui.aceternity.com/",
      imageComponent: AceternityIcon,
    },
    {
      name: "Posthog",
      description: "single platform to analyze, test, observe, and deploy new features",
      category: [Category.Utility],
      href: "https://posthog.com/",
      imageComponent: PosthogIcon,
    },
    {
      name: "Upstash",
      description: "Serverless Data Platform",
      category: [Category.Backend],
      href: "https://upstash.com/",
      imageComponent: UpstashIcon,
    },
    {
      name: "Drizzle",
      description: "TypeScript ORM that is production ready",
      category: [Category.Utility],
      href: "https://orm.drizzle.team/",
      imageComponent: DrizzleIcon,
    },
    {
      name: "Next-Intl",
      description: "Internationalization for Next.js",
      category: [Category.Utility],
      href: "https://next-intl-docs.vercel.app/",
      imageComponent: NextIntlIcon,
    },
    {
      name: "Stripe",
      description: "first class payment system",
      category: [Category.Utility],
      href: "https://stripe.com/",
      imageComponent: StripeIcon,
    },
    {
      name: "Pusher",
      description: "Powering realtime experiences",
      category: [Category.Backend],
      href: "https://pusher.com/",
      imageComponent: PusherIcon,
    },
    {
      name: "React Email",
      description: "next generation of writing emails",
      category: [Category.Utility],
      href: "https://react.email/",
      imageComponent: ReactEmailIcon,
    },
    {
      name: "Figma",
      description: "collaborative design tool",
      category: [Category.Design],
      href: "https://www.figma.com/",
      imageComponent: FigmaIcon,
    },
    {
      name: "Notion",
      description: "create sites to various topics",
      category: [Category.Utility],
      href: "https://www.notion.so/",
      imageComponent: NotionIcon,
    },
    {
      name: "Three.Js",
      description: "create and display animated 3D computer graphics",
      category: [Category.Design],
      href: "https://threejs.org/",
      imageComponent: ThreeIcon,
    },

  ];

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  return (
    <section className="">
      <div className="mb-6 flex flex-wrap gap-4">
        <Button onClick={() => setSelectedCategory(null)}>
          Show All
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.Framework)}
        >
          Framework
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
          onClick={() => setSelectedCategory(Category.Backend)}
        >
          Backend
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => setSelectedCategory(Category.ComponentLibrary)}
        >
          Component Library
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
