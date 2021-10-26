import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from '../styles'

import Item from '../components/list/Item'

const Generations = () => {
  const [generations, setGenerations] = useState([])
  const [error, setError] = useState(null)
  const history = useHistory()
  const language = localStorage.getItem('language')

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/generation/'
    })
      .then(response => {
        setGenerations(response.data.results)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  const handleClick = name => {
    history.push(`/generations/${name}`)
  }

  const generationItems = generations.map((item, index) => (
    <ItemLink key={index} onClick={() => handleClick(item.name)}>
      <Item element={item} language={language} />
    </ItemLink>
  ))

  return (
    <div>
      <Title>
        <h1>Generations</h1>
      </Title>
      <GenerationItems>{generationItems}</GenerationItems>
    </div>
  )
}

const Title = styles.generations.Title
const ItemLink = styles.generations.ItemLink
const GenerationItems = styles.generations.GenerationItems

export default Generations
