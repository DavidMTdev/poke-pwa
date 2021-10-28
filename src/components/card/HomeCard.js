import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles'

import Item from '../list/Item'

const HomeCard = ({
  width = '50',
  text = '',
  img = false,
  src = '',
  alt = '',
  item = {},
  language = ''
}) => {
  return (
    <CardItem width={width}>
      {img && <CardImage src={src} alt={alt} />}
      {text && <CardText>{text}</CardText>}
      {item && <Item element={item} language={language} />}
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
  text: PropTypes.string,
  item: PropTypes.object,
  language: PropTypes.string
}

export default HomeCard
