import { useEffect, useState } from "react"
import getPokemons from "../../services/pokemons"
import getPokemonDetails from "../../services/pokemon-details"
import getNextPokemons from "../../services/next-pokemons"
import styled from "styled-components"
import Header from "../header"
import PokemonList from "../pokemon-list"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState('')    

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await getPokemons()
            const detailedPokemon = await detailedPokemons(response.results)
    
            setNextUrl(response.next)
            setPokemons(detailedPokemon)    
        }

        fetchPokemons()
    }, [])

    const loadMorePokemons = async () => {
        const response = await getNextPokemons(nextUrl)
        const detailedPokemon = await detailedPokemons(response.results)
        
        setNextUrl(response.next)
        setPokemons([...pokemons, ...detailedPokemon])  
    }

    const detailedPokemons = async (response) => {
        const detailedPokemons = await Promise.all(response.map(async (pokemon) => {
            const detailedPokemon = await getPokemonDetails(pokemon.url);
            
            return {  
                abilities: detailedPokemon.abilities,
                height: detailedPokemon.height,
                id: detailedPokemon.id,
                moves: detailedPokemon.moves,
                name: detailedPokemon.name,
                sprites: detailedPokemon.sprites,
                types: detailedPokemon.types,
                weight: detailedPokemon.weight,
            };
        }));

        return detailedPokemons  
    }
    
    return (
        <Main>
            <Header />
            <PokemonList pokemons={pokemons} loadMorePokemons={loadMorePokemons}/>
        </Main>
    )
}

const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Pokedex