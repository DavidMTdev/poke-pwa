import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles'

const PokeStats = props => {
  const [stats, setStats] = useState(props.item)

  return (
    <StatsContainer>
      <StatsTitle>Stats</StatsTitle>
      <StatsList>
        {stats.map((item, index) => (
          <StatsItem key={index}>
            <StatsName>{item?.stat.name}</StatsName>
            <StatsValue>{item?.base_stat}</StatsValue>
          </StatsItem>
        ))}
      </StatsList>
    </StatsContainer>
  )
}

const StatsContainer = styles.poke.StatsContainer
const StatsList = styles.poke.StatsList
const StatsItem = styles.poke.StatsItem
const StatsName = styles.poke.StatsName
const StatsValue = styles.poke.StatsValue
const StatsTitle = styles.poke.StatsTitle

PokeStats.propTypes = {
  item: PropTypes.array
}

export default PokeStats
