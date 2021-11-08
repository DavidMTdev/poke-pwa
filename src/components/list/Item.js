import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import styles from '../../styles'

const Item = props => {
  const [text, setText] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: props.element.url
    })
      .then(response => {
        const res = response.data?.names.filter(
          item => item?.language.name === props.language
        )

        setText(res[0]?.name)
      })
      .catch(error => {
        setText(props.element?.name)
      })
  }, [])

  return <ItemText>{text}</ItemText>
}

const ItemText = styles.generations.ItemText

Item.propTypes = {
  element: PropTypes.object,
  language: PropTypes.string
}

export default Item
