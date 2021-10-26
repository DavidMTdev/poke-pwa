import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const generation = variable => {
  return {
    Title: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.white};
    `,
    ItemText: styled.div`
      color: ${props => props.theme.blue};
    `,
    ItemLink: styled.div`
      background-color: ${props => props.theme.primary};
      margin: 10px 0;
      min-width: 70%;
      height: 40px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    GenerationItems: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  }
}

export default generation
