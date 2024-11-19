"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

const ShinyButton = () => {
  return (
    <Link href={"/contact"} className="lg:motion-duration-[0.15s]/blur lg:motion-duration-[0.68s]/opacity lg:motion-duration-[1.70s]/rotate lg:motion-delay-[0.38s]/blur lg:motion-delay-[0.38s]/scale lg:motion-ease-spring-bouncier lg:motion-scale-in-[0.5] lg:motion-translate-x-in-[-280%] lg:motion-translate-y-in-[120%] lg:motion-rotate-in-[0deg] lg:motion-blur-in-[10px] lg:motion-opacity-in-[33%]">
      <LazyMotion features={domAnimation}>
        <m.button
          //@ts-ignore
          initial={{ "--x": "100%", scale: 1 }}
          //@ts-ignore
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.2,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          className="radial-gradient relative rounded-md md:px-4 text-sm md:text-base md:py-2 py-2 px-3 transition-colors hover:bg-neutral-700"
        >
          <span className="linear-mask relative block h-full w-full tracking-wide text-neutral-100">
            get in touch
          </span>
          <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
        </m.button>
      </LazyMotion>
    </Link>
  );
};

export default ShinyButton;
