import { useState } from "react"

export default function PlayerInfo({ initialName, symbol }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  let editAbleName = <span>{playerName}</span>

  if (isEditing) {
    editAbleName = <input
      type="text"
      value={playerName}
      onChange={handleChangePlayerName}
      onKeyDown={(e) => e.key === "Enter" ? handleIsEditing() : ''}
      required
    />
  }

  function handleIsEditing() {
    setIsEditing(value => !value)
  }

  function handleChangePlayerName(event) {
    setPlayerName(event.target.value)
  }

  return (
    <div className="palyerInfo-container">
      {editAbleName}
      <span>{symbol}</span>
      <button
        onClick={handleIsEditing}
      >
        {!isEditing ? 'Edit' : 'Save'}
      </button>
    </div>
  )
}
