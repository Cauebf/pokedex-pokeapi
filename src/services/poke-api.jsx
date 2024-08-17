import axios from 'axios';

export async function getPokemons(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        throw error;
    }
}

export async function getDetailedPokemon(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching detailed pokemon:', error);
        throw error;
    }
}

export async function getAbilities(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching abilities:', error);
        throw error;
    }
}

export async function getMoves(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching moves:', error);
        throw error;
    }
}

export async function getSpecies(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching species:', error);
        throw error;
    }
}
