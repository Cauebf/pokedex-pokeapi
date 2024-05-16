async function getMoveDetails(url) {
    const response = await fetch(url)
    return await response.json()
}

export default getMoveDetails