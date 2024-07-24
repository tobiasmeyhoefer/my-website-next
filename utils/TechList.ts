enum Category {
  WebFramework,
  StateManagement,
  Utility,
  Design,
  Database,
  ComponentLibrary,
}

type TechItem = {
  name: string;
  description: string;
  category: Category | Category[];
  href: string;
  imageUrl?: string;
};

export const techList: TechItem[] = [
  {
    name: "React",
    description: "The library for web and native user interfaces",
    category: Category.WebFramework,
    href: "https://reactjs.org/",
    imageUrl: "https://reactjs.org",
  },
  {
    name: "Next.Js",
    description: "The React Framework for the Web",
    category: Category.WebFramework,
    href: "https://nextjs.org/",
  },
  {
    name: "ShadCn",
    description:
      "Beautifully designed components that you can copy and paste into your apps",
    category: [Category.ComponentLibrary, Category.Design],
    href: "https://ui.shadcn.com/",
  },
  {
    name: "TailwindCSS",
    description: "Rapidly build modern websites without ever leaving your HTML",
    category: Category.Design,
    href: "https://tailwindcss.com/",
  },
  {
    name: "Zod",
    description: "TypeScript-first schema validation with static type inference",
    category: Category.Utility,
    href: "https://zod.dev/",
  },
];
