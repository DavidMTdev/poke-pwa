import React from 'react'
import { useHistory } from 'react-router'

const BackButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return <div onClick={() => handleClick()}>Back</div>
}

export default BackButton
