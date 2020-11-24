import { graphql } from 'gatsby'
import React, {useState} from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Board from '../components/board/board'
import Module from './ai'

interface Props {
	location: Location
}
const toString = (board: int[][]): string => {
	 let out = "";
	board.forEach((row) => row.forEach((elem)=>{out+=elem}));
	return out;
}
const Blog: React.FC<Props> = ({ data, location }: Props) => {
	const [pieces, setPieces] = useState(new Array(6)
        .fill(0)
        .map(() => new Array(7)
            .fill(0)));

	const placePiece = (col, val) =>{
		for(let i = 0; i < 6; i++){
			if(pieces[i][col] == 0){
				pieces[i][col] = val;
				let newPieces = JSON.parse(JSON.stringify(pieces))
				setPieces(newPieces);
				return newPieces;
			}else{
				console.log(pieces[i][col], pieces, pieces[i], col);
			}
		}
	}
	let moduleInstance = null;
	
	new Module().then(myModule => {
		moduleInstance = myModule;
	});

	
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Connect Four" />
        <section className="text-center">
          <div className="container">
			  <Board pieces={pieces} updateBoard={(col) => {
				  const newPieces = placePiece(col, 1)
				  const aiMove = moduleInstance.getMove(toString(newPieces));
				  placePiece(aiMove, 2)
			  }}/>
		  </div>
		</section>
    </Layout>
  )
}

export default Blog

