import React from 'react'
import Square from '../square/square'
interface Props {
  pieces: int[][]
  updateBoard: (number) => void
  disabled: boolean
}

const Board: React.FC<Props> = ({ pieces, updateBoard, disabled }: Props) => {
  const board = []
  for (let i = 5; i >= 0; i -= 1) {
    const columns = []
    for (let j = 0; j < 7; j += 1) {
      const val = pieces[i][j]
      let color = 'empty'
      if (val == 1) color = 'white'
      else if (val == 2) color = 'black'
      columns.push(
        <Square
          key={j}
          color={color}
          onClick={(_) => updateBoard(j)}
          disabled={disabled}
        />
      )
    }
    board.push(
      <div key={i} className="board-row">
        {columns}
      </div>
    )
  }
  return board
}

export default Board
