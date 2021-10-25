import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const login = variable => {
  return {
    StyledHeader: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 30px;
    `,

    LogoHeader: styled.div`
      position: relative;
    `,

    LogoBackground: styled.img`
      width: 200px;
      height: auto;
    `,

    LogoPokemon: styled.img`
      width: 200px;
      height: auto;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    `,

    Heading: styled.h1`
      color: ${props => props.theme.primary};
      margin: 0;
      padding: 0;
    `,

    FormContainer: styled.div`
      padding: 12px;
    `,

    StyledForm: styled.form`
      display: flex;
      flex-direction: column;
      margin: 0 20px;
    `,

    StyledInput: styled.input`
      height: 30px;
      margin-bottom: 20px;
      border-radius: 4px;
      border-style: none;
      outline: none;
    `,

    StyledButton: styled.button`
      height: 50px;
      border-radius: 4px;
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.blue};
      font-weight: 600;
      border-style: none;
    `
  }
}

export default login
