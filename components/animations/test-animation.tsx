"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function TestAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className=""
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
