import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import styles from '../styles'

import BackButton from '../components/button/BackButton'
import PokeStats from '../components/pokemon/PokeStats'
import PokeImage from '../components/pokemon/PokeImage'
import Loading from '../components/loading'

const Pokemon = () => {
  const { id } = useParams()

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  const localStorageFavorites = localStorage.getItem('favorites')

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const [isFavorite, setIsfavorite] = useState(false)
  const [favorites, setFavorites] = useState(
    localStorageFavorites ? JSON.parse(localStorageFavorites) : []
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
        setIsfavorite(favorites.some(item => item.id === response.data.id))
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

      {isLoading ? (
        <Loading size='2' />
      ) : (
        <>
          <FavoriteButton
            fav={isFavorite}
            onClick={() => {
              handleFavorite()
            }}
          >
            {isFavorite ? 'Remove' : 'Add'} Favorite
          </FavoriteButton>

          <PokeImage sprites={pokemon?.sprites} />
          <PokeStats item={pokemon?.stats} />
        </>
      )}
    </div>
  )
}

const FavoriteButton = styles.button.FavoriteButton

export default Pokemon
