"use client"

const SortedTechPage = () => {

  enum category {
    WebFramework, StateManagement, Utility, Design, Database, ComponentLibrary
  }

  type TechList = [{
    name: string;
    description: string;
    category: category | category[];
    href: string;
    imageUrl?: string;
  }]

  // const tech: TechList = [
  //   {
  //     name: "React",
  //     description: "A JavaScript library for building user interfaces",
  //     category: category.WebFramework,
  //     href: "https://reactjs.org/",
  //     imageUrl: "https://reactjs.org"
  //   },
  //   {
  //     name: "Next.Js",
  //     description: "The Progressive JavaScript Framework",
  //     category: category.WebFramework,
  //     href: "https://vuejs.org/"
  //   },
  //   {
  //     name: "ShadCn",
  //     description: "Beautifully designed components that you can copy and paste into your apps",
  //     category: [category.ComponentLibrary, category.Design],
  //     href: "https://ui.shadcn.com/"
  //   },
  //   {
  //     name: "TailwindCSS",
  //     description: "One framework. Mobile & desktop",
  //     href: "https://angular.io/"
  //   },
  //   {
  //     name: "Zod",
  //     description: "One framework. Mobile & desktop",
  //     href: "https://zod.dev/"
  //   }
  // ]



  return (
    <section>
      <div></div>
    </section>
  );
};

export default SortedTechPage;
