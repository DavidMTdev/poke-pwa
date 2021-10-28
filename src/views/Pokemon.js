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
  const favoritesLocalStorage = localStorage.getItem('favorites')

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const [isFavorite, setIsfavorite] = useState(false)
  const [favorites, setFavorites] = useState(
    favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : []
  )

  useEffect(() => {
    setIsfavorite(favorites.some(item => item.id === pokemon.id))
  }, [favorites])

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

  const handleFavorite = () => {
    isFavorite ? removeFavorite() : addFavorite()
  }

  const removeFavorite = () => {
    const newFavorite = favorites.filter(item => item.id !== pokemon.id)
    localStorage.setItem('favorites', JSON.stringify(newFavorite))
    setFavorites(newFavorite)
  }

  const addFavorite = () => {
    const newFavorite = [...favorites, pokemon]
    localStorage.setItem('favorites', JSON.stringify(newFavorite))
    setFavorites(newFavorite)
  }

  return (
    <div>
      <BackButton />
      <div
        onClick={() => {
          handleFavorite()
        }}
      >
        {isFavorite ? 'Remove' : 'Add'} Favorite
      </div>
      {isLoading ? <Loading size='2' /> : <PokeStats item={pokemon?.stats} />}
    </div>
  )
}

export default Pokemon
