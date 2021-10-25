import { Link } from 'react-router-dom'
import styled from 'styled-components'

const header = variable => {
  return {
    HollowHeader: styled.div`
      height: 5vh;
      width: 100%;
    `,

    StyledHeader: styled.header`
      position: fixed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      left: 0;
      height: 5vh;
      width: 100%;
      background-color: ${props => props.theme.primary};
    `,

    Nav: styled.nav`
      ${variable.flexCenter}
      height: 100vh;
      width: 60%;
      position: absolute;
      top: 100%;
      background-color: ${props => props.theme.primary};
      transition: ease-in 1s translate(0);
    `,

    StyledLink: styled(Link)`
      /* height: 100%; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      color: ${props => props.theme.white};
      text-decoration: none;
      font-weight: 600;
    `,

    LogoHeader: styled.img`
      height: 70%;
      width: 100px;
      margin-left: 10px;
    `,

    MenuBurger: styled.div`
      width: 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10px;
      margin-right: 10px;
    `,

    Burger: styled.span`
      height: 3px;
      width: 100%;
      background-color: ${props => props.theme.white};
      position: relative;
      &:before {
        content: '';
        height: 3px;
        width: 100%;
        background-color: ${props => props.theme.white};
        display: block;
        position: absolute;
        top: -10px;
      }
      &:after {
        content: '';
        height: 3px;
        width: 100%;
        background-color: ${props => props.theme.white};
        display: block;
        position: absolute;
        top: 10px;
      }
    `
  }
}

export default header
