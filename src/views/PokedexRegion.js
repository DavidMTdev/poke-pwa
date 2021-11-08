import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'

import styles from '../styles'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'
import HomeCard from '../components/card/HomeCard'

const PokedexRegion = () => {
  const { region } = useParams()
  const history = useHistory()

  const apiUrl = `https://pokeapi.co/api/v2/pokedex/${region}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(true)
  const [pokedex, setPokedex] = useState({ url: apiUrl, pokemon_entries: [] })
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)

  useEffect(async () => {
    const poke = []
    let pokemon_entries = []

    await axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        pokemon_entries = response.data.pokemon_entries

        setPokedex({ ...pokedex, ...response.data })
      })
      .catch(error => {
        console.log(error)
      })

    for (let index = offset; index < limit; index++) {
      const element = pokemon_entries[index]

      await getPokemons(element.entry_number).then(r => {
        poke.push(r)
      })
    }

    setPokemons(poke)
    setOffset(limit)
    setLimit(limit + limit)
    setIsLoading(false)
  }, [])

  const getPokemons = id => {
    return axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${id}`
    })
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleClick = name => {
    history.push(`/pokemon/${name}`)
  }

  const onEnd = async () => {
    const poke = []
    let l = limit

    if (l > pokedex.pokemon_entries.length) {
      l = pokedex.pokemon_entries.length
    }

    for (let index = offset; index < l; index++) {
      const element = pokedex.pokemon_entries[index]
      await getPokemons(element.entry_number)
        .then(r => {
          poke.push(r)
        })
        .catch(error => {
          console.log(error)
        })
    }

    setPokemons([...pokemons, ...poke])
    setOffset(offset + l)
    setLimit(l)
  }

  const showCardPokemons = pokemons.map((item, index) => (
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
      <div>
        {isLoading ? (
          <Loading size='2' />
        ) : (
          <>
            <Title>
              <h1>
                <Item element={pokedex} language={language} />
              </h1>
            </Title>
            <InfiniteScroll
              dataLength={pokemons.length}
              next={onEnd}
              hasMore={true}
              loader={<Loading size='2' />}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              refreshFunction={() => {}}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8595; Pull down to refresh
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8593; Release to refresh
                </h3>
              }
            >
              <CardContainer>{showCardPokemons}</CardContainer>
            </InfiniteScroll>
          </>
        )}
      </div>
    </div>
  )
}

const Title = styles.generations.Title
const CardContainer = styles.home.CardContainer
const CardLink = styles.home.CardLink

export default PokedexRegion
