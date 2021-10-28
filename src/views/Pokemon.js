import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import BackButton from '../components/button/BackButton'
import PokeStats from '../components/pokemon/PokeStats'
import Loading from '../components/loading'

const Pokemon = () => {
  const { id } = useParams()
  const history = useHistory()

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

  useEffect(async () => {
    await axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        console.log(response.data)
        setPokemon(response.data)
      })
      .catch(error => {
        console.log(error)
      })

    setIsLoading(false)
  }, [])

  return (
    <div>
      <BackButton />
      {isLoading ? <Loading size='2' /> : <PokeStats item={pokemon?.stats} />}
    </div>
  )
}

export default Pokemon
