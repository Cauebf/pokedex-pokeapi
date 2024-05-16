async function getPokemonDetails(pokemonUrl) {
    const response = await fetch(pokemonUrl)
    return await response.json()
}

export default getPokemonDetails