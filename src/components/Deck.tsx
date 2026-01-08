import type { CardValue } from "../types/card"
import { Card } from "./Card"

type DeckProps = {
  cards: CardValue[]
  total: number
}

export function Deck({ cards, total }: DeckProps) {
  return (
    <div className="bg-neutral-800 rounded flex flex-col">
      <span className="text-pretty font-bold text-lg text-end pe-2 pt-1 text-white">
        Total: {total}
      </span>
      <div className="flex flex-wrap gap-2 min-h-72 px-8 pb-2 pt-0 rounded">
        {cards.map((card, i) => (
          <Card
            number={card.number}
            symbol={card.symbol}
            key={`${card.symbol}_of_${card.number}_${i}`}
          />
        ))}
      </div>
    </div>
  )
}
