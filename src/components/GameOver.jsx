export default function GameOver({ winner, onReStart }) {
  return (
    <div className="gameOver-container">
      <div className="gameOver-content">
        {winner && <h3>{winner} won!</h3>}
        {!winner && <h3>Draw</h3>}
        <button onClick={onReStart}>Rematch</button>
      </div>
    </div>
  )
}
