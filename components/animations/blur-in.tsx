"use client"

import { motion } from "framer-motion";

export function BlurIn() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="text-center text-lg md:text-xl"
    >
      This page is currently under construction
    </motion.h1>
  );
}