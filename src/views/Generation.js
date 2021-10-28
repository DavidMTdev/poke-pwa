import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'

const Generation = () => {
  const { name } = useParams()

  const apiUrl = `https://pokeapi.co/api/v2/generation/${name}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(true)
  const [generation, setGeneration] = useState({ url: apiUrl, types: [] })

  useEffect(async () => {
    await axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        console.log({ ...generation, ...response.data })

        setGeneration({ ...generation, ...response.data })
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
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

      {isLoading ? (
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
