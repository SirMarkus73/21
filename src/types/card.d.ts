import type { CARD_NUMBERS, CARD_SYMBOLS } from "../constants/card"

export type CardSymbol = (typeof CARD_SYMBOLS)[number]
export type CardNumber = (typeof CARD_NUMBERS)[number]

export type CardProps = {
  symbol: CardSymbol
  number: CardNumber
}

export type CardValue = {
  number: CardNumber
  symbol: CardSymbol
}
