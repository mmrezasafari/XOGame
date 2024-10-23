import './App.css'
import PlayerInfo from './components/PlayerInfo'

function App() {

  return (
    <>
      <div className='container'>
        <div className='playersInfo-container'>
          <PlayerInfo initialName='player1' symbol='X' />
          <PlayerInfo initialName='player2' symbol='O' />
        </div>
      </div>
    </>
  )
}

export default App
