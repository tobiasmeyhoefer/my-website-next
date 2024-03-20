"use client"

//bekommt die Punkte Anzahl und liefert die Komponente zurück
import { motion } from "framer-motion"
import Circle from "./Circle"

// params: {
//   skill: string;
//   circles: string;
// }

export default function SkillCircles({ params }: { params: { skill: string; circles: number } }) {
  let content = []
  for (let i = 0; i < 10; i++) {
    if (i < params.circles) {
      content.push(<Circle key={params.skill} isBlack={true}></Circle>)
    } else {
      content.push(<Circle key={params.skill} isBlack={false}></Circle>)
    }
  }

  let content2 = []
  for (let i = 0; i < 10; i++) {
    content2.push(<Circle key={params.skill} isBlack={false}></Circle>)
  }

  return (
    <li key={params.skill} className="flex items-center w-fit relative">
      <div className="flex gap-1 absolute right-0 w-fit -z-10">{content2}</div>
      <p className="text-base md:text-xl w-48">{params.skill}</p>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex gap-1"
      >
        {content}
      </motion.div>
    </li>
  )
}
