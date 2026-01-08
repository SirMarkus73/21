import type { CardValue } from "../types/card"

export const calculateCardTotalValue = (cards: CardValue[]) => {
  let total = 0
  const aces: CardValue[] = []

  for (const card of cards) {
    if (card.number === "ace") {
      aces.push(card)
    } else {
      total += parseInt(card.number, 10)
    }
  }

  aces.forEach(() => {
    const canBeEleven = total < 11

    if (canBeEleven) {
      total += 11
    } else {
      total += 1
    }
  })

  return total
}
