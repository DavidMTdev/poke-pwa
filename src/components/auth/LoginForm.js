import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import styles from '../../styles'

import Loading from '../loading'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showLoading, setShowLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {}, [username])

  const onSubmit = e => {
    e.preventDefault()
    setShowLoading(true)

    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: username,
        password: password
      }
    })
      .then(response => {
        localStorage.setItem('token', response.headers['x-access-token'])

        setTimeout(() => {
          history.push('/home')
        }, 1000)

        setShowLoading(false)
      })
      .catch(function (error) {
        localStorage.removeItem('token')
        console.log(error)
      })
  }

  return (
    <>
      <FormContainer>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            value={username}
            onChange={e => setUsername(e.target.value)}
            name='username'
            type='text'
          ></StyledInput>
          <StyledInput
            value={password}
            name='password'
            type='password'
            onChange={e => setPassword(e.target.value)}
          ></StyledInput>
          <StyledButton type='submit'>Connexion</StyledButton>
        </StyledForm>
      </FormContainer>

      {showLoading && <Loading size='1' />}
    </>
  )
}

const FormContainer = styles.login.FormContainer
const StyledForm = styles.login.StyledForm
const StyledInput = styles.login.StyledInput
const StyledButton = styles.login.StyledButton

export default LoginForm
