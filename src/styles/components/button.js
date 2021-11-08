import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const button = variable => {
  return {
    ButtonContainer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5vh;
      width: auto;
      margin: 10px 50px;
      border-radius: 4px;
      background-color: ${props => props.theme.black};
      color: ${props => props.theme.white};
    `,
    FavoriteButton: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 5vh;
      width: auto;
      margin: 10px 50px;
      border-radius: 4px;
      background-color: ${props =>
        props.fav ? props.theme.primary : props.theme.red};
      color: ${props => props.theme.black};
    `
  }
}

export default button
