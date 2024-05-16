async function getAbilityDetails(abilityUrl) {
    const response = await fetch(abilityUrl)
    return await response.json()
}

export default getAbilityDetails