import React, { useState } from 'react'

import styles from '../styles'

import imageTeam from '../assets/images/team.png'

import HomeCard from '../components/card/HomeCard'
import LoadingDisable from '../components/loading/LoadingDisable'

const Home = () => {
  const [showLoading, setShowLoading] = useState(false)

  return (
    <>
      <CardContainer>
        <HomeCard width='50' text='Generations' />
        <HomeCard width='50' text='Pokedex' />
        <HomeCard
          width='100'
          text='My Team'
          img={true}
          src={imageTeam}
          alt={imageTeam}
        />
        <HomeCard width='100' text='Game' />
      </CardContainer>

      {showLoading && <LoadingDisable />}
    </>
  )
}

const CardContainer = styles.home.CardContainer

export default Home
