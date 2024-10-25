import { useState } from "react"

export default function PlayerInfo({ initialName, symbol, isActive, onChangeName }) {
  const [name, setName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  let editAbleName = <span>{name}</span>

  if (isEditing) {
    editAbleName = <input
      type="text"
      value={name}
      onChange={handleChange}
      onKeyDown={(e) => e.key === "Enter" ? handleIsEditing() : ''}
      required
    />
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleIsEditing() {
    setIsEditing(value => !value)

    if (isEditing) {
      onChangeName(symbol, name)
    }
  }

  return (
    <div className={`palyerInfo-container ${isActive ? 'activePlayer' : ''}`}>
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
