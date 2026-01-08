import { motion } from "motion/react"
import type { CardProps } from "../types/card"

export function Card({ symbol, number }: CardProps) {
  return (
    <motion.img
      layout
      src={`/cards/${number}_of_${symbol}.svg`}
      alt={`${number}_of_${symbol}`}
      width={222.77 * 0.8}
      height={323.53 * 0.8}
      style={{ position: "relative" }}
      animate={{ top: "0%" }}
      initial={{ top: "-25%" }}
      exit={{ left: "-100%", transition: { duration: 0.1 } }}
    />
  )
}
