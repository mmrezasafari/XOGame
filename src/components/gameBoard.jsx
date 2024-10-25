export default function GameBoard({ board, onSelectSquare }) {
  return (
    <ol className="gameBoard-orderList">
      {
        board.map((row, rowIndex) => {
          return (
            <li className="gameBoard-col" key={`row-${rowIndex}`}>
              <ol className='gameBoard-row'>
                {
                  row.map((col, colIndex) => {
                    return (
                      <li key={`col-${colIndex}`}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={col}><h1>{col}</h1></button>
                      </li>
                    )
                  })
                }
              </ol>
            </li>
          )
        })
      }
    </ol>
  )
}
