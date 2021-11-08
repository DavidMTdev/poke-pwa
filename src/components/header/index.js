/* eslint-disable no-unused-vars */
import { useState } from 'react'

import styles from '../../styles'

import logo from '../../assets/images/header_logo.svg'

const Header = () => {
  const [showLink, setShowLink] = useState(true)
  const [showNav, setShowNav] = useState(false)

  const isToken = localStorage.getItem('token')

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <HollowHeader />

      <StyledHeader>
        <LogoHeader src={logo} alt={logo} />

        <MenuBurger onClick={handleClick}>
          <Burger></Burger>
        </MenuBurger>

        {showNav && (
          <Nav>
            {!isToken && (
              <StyledLink to='/login' onClick={handleClick}>
                Login
              </StyledLink>
            )}
            {isToken && (
              <StyledLink to='/home' onClick={handleClick}>
                Home
              </StyledLink>
            )}
            {isToken && (
              <StyledLink to='/pokedex' onClick={handleClick}>
                Pokédex
              </StyledLink>
            )}
            {isToken && (
              <StyledLink to='/generations' onClick={handleClick}>
                Generations
              </StyledLink>
            )}
            {isToken && (
              <StyledLink to='/team' onClick={handleClick}>
                My Team
              </StyledLink>
            )}
            {isToken && (
              <StyledLink to='/game' onClick={handleClick}>
                Game
              </StyledLink>
            )}
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
