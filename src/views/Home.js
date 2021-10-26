import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from '../styles'

import imageTeam from '../assets/images/team.png'

import HomeCard from '../components/card/HomeCard'
import LoadingDisable from '../components/loading/LoadingDisable'

const Home = () => {
  const [showLoading, setShowLoading] = useState(false)
  const history = useHistory()

  const handleClick = route => {
    setShowLoading(true)

    setTimeout(() => {
      history.push(route)
    }, 1000)
  }

  return (
    <>
      <CardContainer>
        <CardLink onClick={() => handleClick('/generations')}>
          <HomeCard width='50' text='Generations' />
        </CardLink>

        <CardLink onClick={() => handleClick('/pokedex')}>
          <HomeCard width='50' text='Pokedex' />
        </CardLink>

        <CardLink onClick={() => handleClick('/team')}>
          <HomeCard
            width='100'
            text='My Team'
            img={true}
            src={imageTeam}
            alt={imageTeam}
          />
        </CardLink>

        <CardLink onClick={() => handleClick('/game')}>
          <HomeCard width='100' text='Game' />
        </CardLink>
      </CardContainer>

      {showLoading && <LoadingDisable />}
    </>
  )
}

const CardContainer = styles.home.CardContainer
const CardLink = styles.home.CardLink

export default Home
