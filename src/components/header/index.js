import { useState } from 'react'

import styles from '../../styles'

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [showLink, setShowLink] = useState(true)

  return (
    <>
      <HollowHeader />

      <StyledHeader>
        <StyledNav>
          {showLink && <StyledLink to='/'>Login</StyledLink>}
        </StyledNav>
      </StyledHeader>
    </>
  )
}

const StyledHeader = styles.header.StyledHeader
const StyledNav = styles.header.StyledNav
const StyledLink = styles.header.StyledLink
const HollowHeader = styles.header.HollowHeader

export default Header
