import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import styles from '../styles'

import Item from '../components/list/Item'
import Loading from '../components/loading'
import BackButton from '../components/button/BackButton'
import HomeCard from '../components/card/HomeCard'

const PokedexRegion = () => {
  const { region } = useParams()

  const apiUrl = `https://pokeapi.co/api/v2/pokedex/${region}`
  const language = localStorage.getItem('language')

  const [isLoading, setIsLoading] = useState(true)
  const [pokedex, setPokedex] = useState({ url: apiUrl, pokemon_entries: [] })
  const [pokemons, setPokemons] = useState([])
  const [pokemonsActive, setPokemonsActive] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  useEffect(async () => {
    let pokemon_entries = []

    await axios({
      method: 'GET',
      url: apiUrl
    })
      .then(response => {
        // console.log({ ...pokedex, ...response.data })
        pokemon_entries = response.data.pokemon_entries

        setPokedex({ ...pokedex, ...response.data })
      })
      .catch(error => {
        console.log(error)
      })

    const poke = []

    for (let index = 0; index < limit; index++) {
      const element = pokemon_entries[index]
      // console.log(element)
      await getPokemons(element.entry_number).then(r => {
        poke.push(r)
      })
    }

    setPokemons(poke)

    // for (const pokemon in pokemon_entries) {
    //   if (Object.hasOwnProperty.call(pokemon_entries, pokemon)) {
    //     const element = pokemon_entries[pokemon]
    //     // const pp = Promise.resolve(getPokemons(element.entry_number))
    //     // pp.then(r => console.log(r))
    //     await getPokemons(element.entry_number).then(r =>
    //       setPokemons([...pokemons, r])
    //     )
    //     // poke.push(pp)
    //   }
    // }

    // console.log(poke)

    // pokemon_entries.map(item => {
    //   getPokemons(item.entry_number)
    // })

    setIsLoading(false)
  }, [])

  const getPokemons = id => {
    return axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${id}`
    })
      .then(response => {
        return response.data
        // setPokemons([...pokemons, response.data])
      })
      .catch(error => {
        console.log(error)
      })
  }

  const showCardPokemons = pokemons.map((item, index) => (
    <CardLink key={index}>
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

            <CardContainer>{showCardPokemons}</CardContainer>
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
