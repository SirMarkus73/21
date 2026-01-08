import GameOverImage from "../assets/gameOver.png"

export function GameOver() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src={GameOverImage} alt="Game Over" />
    </div>
  )
}
