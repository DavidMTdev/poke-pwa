import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PokeStats = props => {
  const [stats, setStats] = useState(props.item)

  return (
    <div>
      <div>
        {stats.map((item, index) => (
          <div key={index}>
            <span>{item?.stat.name} </span>
            <span>{item?.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

PokeStats.propTypes = {
  item: PropTypes.array
}

export default PokeStats
