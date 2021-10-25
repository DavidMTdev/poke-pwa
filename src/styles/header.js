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
      top: 0;
      left: 0;
      height: 5vh;
      width: 100%;
      background-color: ${props => props.theme.primary};
    `,
    StyledNav: styled.nav`
      ${variable.flexCenter}
    `,
    StyledLink: styled(Link)``
  }
}

export default header
