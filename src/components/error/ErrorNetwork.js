import React from 'react'

import styles from '../../styles'

const ErrorNetwork = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Problème de connexion</ErrorMessage>
    </ErrorContainer>
  )
}

const ErrorContainer = styles.error.ErrorContainer
const ErrorMessage = styles.error.ErrorMessage

export default ErrorNetwork
