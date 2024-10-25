import { useState } from 'react'
import './App.css'
import PlayerInfo from './components/PlayerInfo'
import PlayGround from './components/gameBoard'
import GameOver from './components/GameOver'
import { WINNING_COMBINATIONS } from './assets/winning-combinations'

const PLAYERS = {
  X: 'Player1',
  O: 'Player2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function handleSetActivePlayer(gameTurn) {
  let currentPlayer = 'X'



  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function handleDriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

function handleDriveWinner(gameBoard, players) {
  let winner

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner
}


function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurn, setGameTurn] = useState([])

  let activePlayer = handleSetActivePlayer(gameTurn)
  let gameBoard = handleDriveGameBoard(gameTurn)
  const winner = handleDriveWinner(gameBoard, players)
  const hasDraw = gameTurn.length === 9 && !winner

  const handleChangePlayerName = (symbol, newName) => {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  const handlePlayGame = (rowIndex, colIndex) => {
    setGameTurn((prevGame) => {
      const currentPlayer = handleSetActivePlayer(prevGame)

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevGame]

      return updatedTurn
    })
  }

  const handleRestartMatch = () => {
    setGameTurn([])
  }

  return (
    <>
      <div className='container'>
        <div className='playersInfo-container'>
          <PlayerInfo initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handleChangePlayerName} />
          <PlayerInfo initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handleChangePlayerName} />
        </div>
        <div className='playGround-container'>
          {(hasDraw || winner) && (<GameOver winner={winner} onReStart={handleRestartMatch} />)}
          <PlayGround board={gameBoard} onSelectSquare={handlePlayGame} />
        </div>
      </div>
    </>
  )
}

export default App
