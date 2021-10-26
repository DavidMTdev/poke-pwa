import React from 'react'

import styles from '../../styles'
import Loading from './'

const LoadingDisable = () => {
  return (
    <DisableContainer>
      <Loading size='1' />
    </DisableContainer>
  )
}

const DisableContainer = styles.loading.DisableContainer

export default LoadingDisable
