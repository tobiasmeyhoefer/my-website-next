"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Drag({ children }: { children: React.ReactNode }) {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef} style={{ touchAction: "none" }}>
      <motion.div drag dragConstraints={constraintsRef}>
        {/* <p>test</p> */}
        {children}
      </motion.div>
    </motion.div>
  );
}
