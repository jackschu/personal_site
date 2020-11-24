import React from 'react'
import Badge from '../badge/badge'

type TileState = "empty" | "white" | "black"

interface Props {
	color: TileState
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Square: React.FC<Props> = ({color, onClick}: Props) => {
	var bootstrapColor;
	console.log(color);
	switch (color){
		case "empty":
			bootstrapColor = "btn-outline-secondary";
			break;
		case "black":
			bootstrapColor = "btn-warning";
			break;
		case "white":
			bootstrapColor = "btn-danger";
			break;
	}

	let className = 'btn ' + bootstrapColor;
	return (<button
        className={className} onClick={onClick}
      >
		.
    </button>
	)
}
export default Square
