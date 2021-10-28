import React from 'react'
import { useHistory } from 'react-router'

import styles from '../../styles'

const BackButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return <ButtonContainer onClick={() => handleClick()}>Back</ButtonContainer>
}

const ButtonContainer = styles.button.ButtonContainer

export default BackButton
