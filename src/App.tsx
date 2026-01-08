import { useEffect, useState } from "react"
import "./App.css"
import { Deck } from "./components/Deck"
import { calculateCardTotalValue } from "./lib/calculateCardsTotalValue"
import { drawUntil17 } from "./lib/drawUntil17"
import { generateRandomCard } from "./lib/generateRandomCard"
import type { CardValue } from "./types/card"

function App() {
  const [cards, setCards] = useState<CardValue[]>([
    generateRandomCard(),
    generateRandomCard(),
  ])
  const [botCards, setBotCards] = useState<CardValue[]>([
    generateRandomCard(),
    generateRandomCard(),
  ])
  const [botTotal, setBotTotal] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const total = calculateCardTotalValue(cards)
    setTotal(total)

    if (total > 21 && botTotal < 17) {
      setBotCards((prev) => {
        return drawUntil17(prev)
      })
    }
  }, [cards, botTotal])

  useEffect(() => {
    const total = calculateCardTotalValue(botCards)
    setBotTotal(total)
  }, [botCards])

  const onAsk: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (total < 21) {
      setCards((prev) => {
        return [...prev, generateRandomCard()]
      })

      if (botTotal < 17) {
        setBotCards((prev) => {
          return [...prev, generateRandomCard()]
        })
      }
    }
  }

  return (
    <main className="grid text-start gap-2">
      <div className="flex flex-row items-center gap-1">
        <h1 className="font-semibold text-xl">Crupier</h1>
        <pre className="text-sm opacity-85 font-semibold">(draw until 17)</pre>
      </div>
      <Deck cards={botCards} total={botTotal} />
      <h1 className="font-semibold text-xl">Tus cartas</h1>
      <Deck cards={cards} total={total} />
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onAsk}
          className="bg-neutral-700 w-32 p-2 rounded text-white disabled:opacity-75 border border-black shadow-sm shadow-neutral-800 hover:scale-105 transition-transform"
          disabled={total >= 21}
        >
          Pedir carta
        </button>
        <button
          type="button"
          className="bg-neutral-200 w-32 p-2 rounded border shadow-sm shadow-neutral-300 hover:scale-105 transition-transform"
          onClick={() => {
            setCards([generateRandomCard(), generateRandomCard()])
            setBotCards([generateRandomCard(), generateRandomCard()])
          }}
        >
          Reset
        </button>
      </div>
    </main>
  )
}

export default App
