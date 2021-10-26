import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles'

const HomeCard = ({
  width = '50',
  text = '',
  img = false,
  src = '',
  alt = ''
}) => {
  return (
    <CardItem width={width}>
      {img && <CardImage src={src} alt={alt} />}
      {text && <CardText>{text}</CardText>}
    </CardItem>
  )
}

const CardItem = styles.home.CardItem
const CardText = styles.home.CardText
const CardImage = styles.home.CardImage

HomeCard.propTypes = {
  width: PropTypes.string,
  img: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string
}

export default HomeCard
