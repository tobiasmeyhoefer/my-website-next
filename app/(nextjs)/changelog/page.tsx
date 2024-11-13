import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function CareerPage() {
  const data = [
    {
      title: "currently",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            writing my bachelor thesis: Impact of rendering strategies in
            React/Next.js Abstract
          </p>
          <p>
            This bachelor thesis explores the impact of different rendering
            strategies in React and Next.js applications. It examines how
            techniques like client-side rendering, server-side rendering, and
            static site generation affect website performance and user
            experience. The research aims to help developers choose the best
            rendering approach for their projects, considering factors such as
            load time, interactivity, and search engine optimization. By
            analyzing these strategies, the thesis provides insights into
            optimizing web applications in the ever-evolving landscape of modern
            front-end development.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            since 2024_ Peaks & Pies, working as a fullstack webdeveloper on
            enterprise landing page conversion optimization for multiple
            international companies with Next.js and Sanity
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="/images/peaks_trusted.png"
              alt="Peaks & Pies trusted"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/peaks_names.png"
              alt="Peaks & Pies names"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            semester abroad at Aarhus University to improve my social cultural
            knowledge
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="/images/mann.jpg"
              alt="Man smiling"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ausblick.jpg"
              alt="Scenic view"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            2022 to 2024_ Berliner Verkehrsbetriebe (BVG), active development of
            web applications, to relieve the daily works of more than 15000
            coworkers
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/work1.jpg"
              alt="BVG work environment"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/work2.jpg"
              alt="BVG work"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-4 font-normal text-neutral-800 dark:text-neutral-200">
            started studying computer science at Berliner Hochschule für Technik
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
