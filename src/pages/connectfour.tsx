import { graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Board from '../components/board/board'
import Module from '../ai'

interface Props {
  location: Location
}
const toString = (board: int[][]): string => {
  let out = ''
  board.forEach((row) =>
    row.forEach((elem) => {
      out += elem
    })
  )
  return out
}

const Blog: React.FC<Props> = ({ data, location }: Props) => {
  const [pieces, setPieces] = useState(
    new Array(6).fill(0).map(() => new Array(7).fill(0))
  )
  const [gameStatus, setGameStatus] = useState('Game In Progress')
  const [disabled, setDisabled] = useState(false)
  const getBotMove = (boardString: string): int => {
    //setDisabled(true); TODO make this use a promise so we can callback when done
    //setGameStatus("Bot thinking...");
    const out = moduleInstance.getMove(boardString)
    //setGameStatus("Your move!");
    setDisabled(false)
    return out
  }

  useEffect(() => {
    const aiMove = getBotMove(
      toString(new Array(6).fill(0).map(() => new Array(7).fill(0)))
    )
    const afterBotMove = toString(placePiece(aiMove, 2))
  }, [])

  const placePiece = (col, val) => {
    for (let i = 0; i < 6; i++) {
      if (pieces[i][col] == 0) {
        pieces[i][col] = val
        let newPieces = JSON.parse(JSON.stringify(pieces))
        setPieces(newPieces)
        return newPieces
      } else {
        console.log(
          'bad piece placement',
          pieces[i][col],
          pieces,
          pieces[i],
          col
        )
      }
    }
  }
  let moduleInstance = null

  new Module().then((myModule) => {
    moduleInstance = myModule
  })
  const getGameOverString = (winnerCode) => {
    if (winnerCode == -1) {
      return 'Game In Progress'
    }
    if (winnerCode == 0) {
      return 'Tie Game'
    }
    if (winnerCode == 1) {
      return 'Red wins!'
    }
    if (winnerCode == 2) {
      return 'Yellow wins !'
    }
  }
  const handleMove = (col) => {
    const newPieces = placePiece(col, 1)
    const newPiecesString = toString(newPieces)
    let gg = moduleInstance.getWinner(newPiecesString)
    if (gg < 0) {
      const aiMove = getBotMove(newPiecesString)
      const afterBotMove = toString(placePiece(aiMove, 2))
      gg = moduleInstance.getWinner(afterBotMove)
    }
    setGameStatus(getGameOverString(gg))
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Connect Four" />
      <section className="text-center">
        <div className="container">
          <h1>{gameStatus}</h1>
          <Board
            pieces={pieces}
            updateBoard={disabled === false ? handleMove : () => {}}
            disabled={disabled}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Blog
