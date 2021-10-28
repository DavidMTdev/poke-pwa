import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from '../styles'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'

const Generations = () => {
  const [generations, setGenerations] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)
  const history = useHistory()
  const language = localStorage.getItem('language')

  useEffect(async () => {
    await axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/generation/'
    })
      .then(response => {
        setGenerations(response.data.results)
        setisLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  const handleClick = name => {
    history.push(`/generations/${name}`)
  }

  const showItems = generations.map((item, index) => (
    <ItemLink key={index} onClick={() => handleClick(item.name)}>
      <Item element={item} language={language} />
    </ItemLink>
  ))

  return (
    <div>
      <BackButton />
      <Title>
        <h1>Generations</h1>
      </Title>
      <GenerationItems>
        {isLoading ? <Loading size='2' /> : showItems}
      </GenerationItems>
    </div>
  )
}

const Title = styles.generations.Title
const ItemLink = styles.generations.ItemLink
const GenerationItems = styles.generations.GenerationItems

export default Generations
