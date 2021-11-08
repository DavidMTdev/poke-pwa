import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const error = variable => {
  return {
    ErrorContainer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f13a3a;
      margin: 30px;
      border-radius: 3px;
    `,
    ErrorMessage: styled.p`
      color: #fff;
      font-weight: bold;
    `
  }
}

export default error
