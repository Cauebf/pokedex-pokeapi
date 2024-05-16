async function getNextPokemons(url) {
    const response = await fetch(url)
    return await response.json()
}

export default getNextPokemons