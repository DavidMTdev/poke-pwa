/* eslint-disable no-unused-vars */
import { useState } from 'react'

import styles from '../../styles'

import logo from '../../assets/images/header_logo.svg'

const Header = () => {
  const [showLink, setShowLink] = useState(true)
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <HollowHeader />

      <StyledHeader>
        <LogoHeader src={logo} alt={logo} />

        <MenuBurger>
          <Burger></Burger>
        </MenuBurger>
        {showNav && (
          <Nav>
            <StyledLink to='/'>Login</StyledLink>
            <StyledLink to='/'>Pokédex</StyledLink>
          </Nav>
        )}
      </StyledHeader>
    </>
  )
}

const HollowHeader = styles.header.HollowHeader
const StyledHeader = styles.header.StyledHeader
const LogoHeader = styles.header.LogoHeader
const MenuBurger = styles.header.MenuBurger
const Burger = styles.header.Burger
const Nav = styles.header.Nav
const StyledLink = styles.header.StyledLink

export default Header
