import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles'

const HomeCard = props => {
  return (
    <CardGroup width={props.width}>
      {props.img && <CardImage src={props.src} alt={props.alt} />}
      {props.text && <CardText>{props.text}</CardText>}
    </CardGroup>
  )
}

// const CardContainer = styles.home.CardContainer
const CardGroup = styles.home.CardGroup
const CardText = styles.home.CardText
const CardImage = styles.home.CardImage

HomeCard.propTypes = {
  width: (PropTypes.string = '50'),
  img: (PropTypes.bool = false),
  src: (PropTypes.string = ''),
  alt: (PropTypes.string = ''),
  text: (PropTypes.string = '')
}

export default HomeCard
