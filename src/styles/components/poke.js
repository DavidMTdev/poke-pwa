import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const poke = variable => {
  return {
    ImageContainer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    Image: styled.img`
      width: 50%;
    `,
    StatsContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    StatsList: styled.div`
      width: 70%;
    `,
    StatsTitle: styled.h3`
      color: ${props => props.theme.white};
      font-size: 48px;
      margin: 0;
    `,
    StatsItem: styled.div`
      display: flex;
      margin: 10px 0;
    `,
    StatsName: styled.div`
      background-color: ${props => props.theme.primary};
      border-radius: 3px;
      padding: 5px 20px;
      margin-right: 20px;
      width: 100%;
      font-weight: bold;
      color: ${props => props.theme.blue};
    `,
    StatsValue: styled.div`
      color: ${props => props.theme.white};
    `
  }
}

export default poke
