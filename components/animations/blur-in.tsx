"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export function BlurIn() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-sm md:text-md"
      >
        This page is currently under construction
      </m.h1>
    </LazyMotion>
  );
}
