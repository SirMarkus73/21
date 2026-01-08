import type { CardProps } from "../types/card"

export function Card({ symbol, number }: CardProps) {
  return (
    <img
      src={`/cards/${number}_of_${symbol}.svg`}
      alt={`${number}_of_${symbol}`}
      width={222.77 * 0.8}
      height={323.53 * 0.8}
      className="opacity-0"
    />
  )
}
