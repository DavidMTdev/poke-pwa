import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles'

const PokeImage = props => {
  const [sprites, setSprites] = useState(props.sprites)

  return (
    <ImageContainer>
      <Image src={sprites.front_default} alt={sprites.front_default} />
      <Image src={sprites.back_default} alt={sprites.back_default} />
    </ImageContainer>
  )
}

const ImageContainer = styles.poke.ImageContainer
const Image = styles.poke.Image

PokeImage.propTypes = {
  sprites: PropTypes.object
}

export default PokeImage
