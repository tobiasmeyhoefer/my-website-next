"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.25 }}
    >
      {children}
    </motion.div>
  );
}
