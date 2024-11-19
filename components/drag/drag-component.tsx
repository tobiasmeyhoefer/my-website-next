"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Drag({ children }: { children: React.ReactNode }) {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef} style={{ touchAction: "none" }}>
      <motion.div drag dragConstraints={constraintsRef}>
        {children}
      </motion.div>
    </motion.div>
  );
}
