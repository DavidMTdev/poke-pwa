import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PokeStats = props => {
  const [stats, setStats] = useState(props.item)

  return (
    <div>
      <div>
        {stats.map(item => (
          <div>{item.effort}</div>
        ))}
      </div>
    </div>
  )
}

PokeStats.propTypes = {
  item: PropTypes.array
}

export default PokeStats
