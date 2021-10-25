import React from 'react'

import styles from '../../styles'
import logoBackground from '../../assets/images/pokeball.png'
import logoPokemon from '../../assets/images/header_logo.svg'

const LoginHeader = () => {
  return (
    <StyledHeader>
      <LogoHeader>
        <LogoBackground src={logoBackground} alt={logoBackground} />
        <LogoPokemon src={logoPokemon} alt={logoPokemon} />
      </LogoHeader>
      {/* <Heading>LOGIN</Heading> */}
    </StyledHeader>
  )
}

const StyledHeader = styles.login.StyledHeader
const LogoHeader = styles.login.LogoHeader
const LogoBackground = styles.login.LogoBackground
const LogoPokemon = styles.login.LogoPokemon
// eslint-disable-next-line no-unused-vars
const Heading = styles.login.Heading

export default LoginHeader
