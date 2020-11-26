import React from 'react'
import Badge from '../badge/badge'

type TileState = 'empty' | 'white' | 'black'

interface Props {
  color: TileState
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
}

const Square: React.FC<Props> = ({ color, onClick, disabled }: Props) => {
  var bootstrapColor
  console.log(disabled)
  switch (color) {
    case 'empty':
      bootstrapColor = 'btn-outline-secondary'
      break
    case 'black':
      bootstrapColor = 'btn-warning'
      break
    case 'white':
      bootstrapColor = 'btn-danger'
      break
  }

  let className = 'btn ' + bootstrapColor
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      .
    </button>
  )
}
export default Square
