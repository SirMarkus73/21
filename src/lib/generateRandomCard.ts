import { CARD_NUMBERS, CARD_SYMBOLS } from "../constants/card"
import type { CardValue } from "../types/card"
import { selectRandom } from "./selectRandom"



export const generateRandomCard = (): CardValue => {
    const symbol = selectRandom(CARD_SYMBOLS)
    const number = selectRandom(CARD_NUMBERS)

    return {
        symbol, 
        number
    }

}