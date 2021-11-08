import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import styles from '../styles'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'
import ErrorNetwork from '../components/error/ErrorNetwork'

const Pokedex = () => {
  const [listPokedex, setListPokedex] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(false)

  const history = useHistory()
  const language = localStorage.getItem('language')

  useEffect(async () => {
    await axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokedex',
      params: {
        offset: 0,
        limit: 28
      }
    })
      .then(response => {
        setListPokedex(response.data.results)
        setisLoading(false)
      })
      .catch(error => {
        setisLoading(false)
        setError(true)
      })
  }, [])

  const handleClick = name => {
    history.push(`/pokedex/${name}`)
  }

  const showItems = listPokedex.map((item, index) => (
    <ItemLink key={index} onClick={() => handleClick(item.name)}>
      <Item element={item} language={language} />
    </ItemLink>
  ))

  return (
    <div>
      <BackButton />
      <Title>
        <h1>Pokedex</h1>
      </Title>
      {error ? (
        <ErrorNetwork />
      ) : (
        <GenerationItems>
          {isLoading ? <Loading size='2' /> : showItems}
        </GenerationItems>
      )}
    </div>
  )
}

const Title = styles.generations.Title
const ItemLink = styles.generations.ItemLink
const GenerationItems = styles.generations.GenerationItems

export default Pokedex
