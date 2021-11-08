import React from 'react'

import styles from '../styles'

const Game = () => {
  return (
    <GameContainer>
      <GameText>You Win</GameText>
    </GameContainer>
  )
}

const GameContainer = styles.game.GameContainer
const GameText = styles.game.GameText

export default Game
