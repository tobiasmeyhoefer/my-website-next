"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function ScrollAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
