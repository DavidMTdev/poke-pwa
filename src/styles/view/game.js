import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const game = variable => {
  return {
    GameContainer: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 5vh);
    `,
    GameText: styled.p`
      color: ${props => props.theme.primary};
      font-weight: bold;
      font-size: 48px;
    `
  }
}

export default game
