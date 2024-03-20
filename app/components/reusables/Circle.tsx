"use client"

import { motion } from "framer-motion"

export default function Circle({ isBlack }: { isBlack: boolean }) {
  if (isBlack) {
    return (
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="fillingCircle w-5 h-5 rounded-full md:w-10 md:h-10 bg-text"
      ></motion.div>
    )
  }

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="w-5 h-5 rounded-full md:w-10 md:h-10 bg-lightGray"
    ></motion.div>
  )
}
