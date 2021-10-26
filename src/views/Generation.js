import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import Item from '../components/list/Item'

const Generation = () => {
  const { name } = useParams()

  const apiUrl = `https://pokeapi.co/api/v2/generation/${name}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(false)
  const [generation, setGeneration] = useState({ url: apiUrl, types: [] })

  // const history = useHistory()

  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        console.log({ ...generation, ...response.data })

        setGeneration({ ...generation, ...response.data })
        setIsLoading(true)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const listTypes = generation.types.map((item, index) => (
    <div key={index}>
      <Item element={item} language={language} />
    </div>
  ))

  return (
    <div>
      {isLoading && (
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
            {listTypes}
          </div>
        </>
      )}
    </div>
  )
}

export default Generation
