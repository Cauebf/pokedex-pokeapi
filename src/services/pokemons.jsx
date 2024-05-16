async function getPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0`)
    return await response.json()
}

export default getPokemons