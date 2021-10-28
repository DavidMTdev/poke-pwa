import React, { useState } from 'react'
import { useHistory } from 'react-router'

import styles from '../styles'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'
import HomeCard from '../components/card/HomeCard'

const Favorites = () => {
  const history = useHistory()

  const localStorageFavorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : []
  const language = localStorage.getItem('language')

  const [favorites, setFavorites] = useState(localStorageFavorites)

  const handleClick = name => {
    history.push(`/pokemon/${name}`)
  }

  const showCardPokemons = favorites.map((item, index) => (
    <CardLink key={index} onClick={() => handleClick(item.id)}>
      <HomeCard
        width='50'
        text=''
        img={true}
        src={item?.sprites?.front_default}
        alt={item?.sprites?.front_default}
        item={item}
        language={language}
      />
    </CardLink>
  ))

  return (
    <div>
      <BackButton />
      <Title>
        <h1>My Team</h1>
      </Title>
      <CardContainer>{showCardPokemons}</CardContainer>
    </div>
  )
}

const Title = styles.generations.Title
const CardContainer = styles.home.CardContainer
const CardLink = styles.home.CardLink

export default Favorites
