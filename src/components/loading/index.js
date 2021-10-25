import React from 'react'

import styles from '../../styles'

import loading from '../../assets/utils/loading.json'

const index = props => {
  const loadingItems = loading.items.map((item, index) => (
    <LoadingItem
      key={index}
      child={index + 1}
      delay={item.delay}
      top={item.top / props.size}
      left={item.left / props.size}
      size={loading.size / props.size}
    />
  ))

  return <Loading size={80 / props.size}>{loadingItems}</Loading>
}

const Loading = styles.loading.Loading
const LoadingItem = styles.loading.LoadingItem

export default index
