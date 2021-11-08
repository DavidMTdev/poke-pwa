import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'
import ErrorNetwork from '../components/error/ErrorNetwork'

const Generation = () => {
  const { name } = useParams()

  const apiUrl = `https://pokeapi.co/api/v2/generation/${name}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [generation, setGeneration] = useState({ url: apiUrl, types: [] })

  useEffect(async () => {
    await axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        setGeneration({ ...generation, ...response.data })
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        setError(true)
      })
  }, [])

  const showItems = generation.types.map((item, index) => (
    <div key={index}>
      <Item element={item} language={language} />
    </div>
  ))

  return (
    <div>
      <BackButton />

      {error ? (
        <ErrorNetwork />
      ) : isLoading ? (
        <Loading size='2' />
      ) : (
        <>
          <div>
            <div>Name :</div>
            <Item element={generation} language={language} />
          </div>
          <div>
            <div>Main Region :</div>
            <Item element={generation.main_region} language={language} />
          </div>
          <div>
            <div>Types :</div>
            {showItems}
          </div>
        </>
      )}
    </div>
  )
}

export default Generation
