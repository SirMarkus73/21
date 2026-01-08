import type { CardValue } from "../types/card"
import { calculateCardTotalValue } from "./calculateCardsTotalValue"
import { generateRandomCard } from "./generateRandomCard"

export function drawUntil17(cards: CardValue[]) {
  const userCards = [...cards]
  let total = calculateCardTotalValue(cards)

  while (total < 17) {
    const newCard = generateRandomCard()
    userCards.push(newCard)
    total = calculateCardTotalValue(userCards)
  }

  return userCards
}
