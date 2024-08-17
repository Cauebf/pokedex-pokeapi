import { useEffect, useState, useContext, useRef } from 'react';
import {
    Main,
    H1,
    SearchContainer,
    Pokemons,
    Loading,
    NoPokemonsFound,
    LoadMorePkmButton,
} from './styles';
import { baseUrl, limit } from '../../variables';
import { ThemeContext } from '../../contexts/theme-context';
import { getDetailedPokemon, getPokemons } from '../../services/poke-api';
import PokemonCard from '../../components/pokemon-card';
import InputSearch from '../../components/input-search';
import TypeFilter from '../../components/type-filter';
import BackToTopButton from '../../components/back-to-top-button';
import ThemeTogglerButton from '../../components/theme-toggle-button';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const inputRef = useRef(null);
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonsUrl, setPokemonsUrl] = useState('');
    const [filteredType, setFilteredType] = useState('');
    const [pokemonSearched, setPokemonSearched] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isInitialFetchDone, setIsInitialFetchDone] = useState(false);
    const [showNoPokemonsMessage, setShowNoPokemonsMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchInitialPokemons();
    }, []);

    useEffect(() => {
        pokemonSearched === ''
            ? resetSearch()
            : pokemonSearched.length >= 2 && handleInputChange();
    }, [pokemonSearched]);

    useEffect(() => {
        if (isInitialFetchDone && pokemonSearched.length >= 2) {
            handleInputChange();
        } else if (isInitialFetchDone) {
            handlePokemonTypeFilter();
        }
    }, [isInitialFetchDone]);

    useEffect(() => {
        filteredType && handlePokemonTypeFilter();
    }, [filteredType]);

    useEffect(() => {
        if (!isLoading && pokemons.length === 0) {
            const timer = setTimeout(() => setShowNoPokemonsMessage(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowNoPokemonsMessage(false);
        }
    }, [isLoading, pokemons]);

    const setDetailedPokemons = async (data, url, reset = false) => {
        const detailedPokemons = await Promise.all(
            data.map((pokemon) => getDetailedPokemon(pokemon.url))
        );

        reset
            ? setPokemons(detailedPokemons)
            : setPokemons((prevPokemons) => [
                  ...prevPokemons,
                  ...detailedPokemons,
              ]);
        setPokemonsUrl(url);
    };

    const fetchInitialPokemons = async () => {
        setIsLoading(true);
        const data = await getPokemons(`${baseUrl}?offset=0&limit=${limit}`);
        await setDetailedPokemons(data.results, data.next, true);
        setIsLoading(false);
    };

    const loadMorePokemons = async () => {
        const data = await getPokemons(pokemonsUrl);
        await setDetailedPokemons(data.results, data.next);
    };

    const fetchAllPokemons = async () => {
        if (!isInitialFetchDone) {
            setIsLoading(true);
            const data = await getPokemons(`${baseUrl}?offset=0&limit=10000`);
            const detailedPokemons = await Promise.all(
                data.results.map((pokemon) => getDetailedPokemon(pokemon.url))
            );

            setAllPokemons(detailedPokemons);
            setIsInitialFetchDone(true);
            setIsLoading(false);
        }
    };

    const handleInputChange = async () => {
        await fetchAllPokemons();
        const filteredPokemons = allPokemons.filter((pokemon) =>
            pokemon.name.includes(pokemonSearched.toLowerCase())
        );

        !isLoading && setPokemons(filteredPokemons);
    };

    const handlePokemonTypeFilter = async () => {
        await fetchAllPokemons();
        const filteredPokemons = allPokemons.filter((pokemon) =>
            pokemon.types.some(
                (pokemonType) => pokemonType.type.name === filteredType
            )
        );

        !isLoading && setPokemons(filteredPokemons);
    };

    const resetSearch = () => {
        setFilteredType('');
        fetchInitialPokemons();
    };

    return (
        <>
            <Main backgroundcolor={theme.background}>
                <H1
                    color={theme.color}
                    onClick={() => {
                        resetSearch();
                        inputRef.current.value = '';
                    }}
                >
                    Pokédex
                </H1>

                <ThemeTogglerButton />

                <SearchContainer
                    isfocused={isInputFocused ? 'true' : undefined}
                >
                    <InputSearch
                        setPokemonSearched={setPokemonSearched}
                        setFocus={setIsInputFocused}
                        inputRef={inputRef}
                    />
                    <TypeFilter
                        filteredType={filteredType}
                        setFilteredType={setFilteredType}
                        fetchInitialPokemons={resetSearch}
                    />
                </SearchContainer>

                <Pokemons
                    isloading={isLoading ? 'true' : undefined}
                    nopokemonsfound={pokemons.length === 0 ? 'true' : undefined}
                >
                    {isLoading ? (
                        <Loading
                            src="/svg/pokeball.svg"
                            alt="Loading..."
                            filter={theme.loadingPokeball}
                        />
                    ) : pokemons.length > 0 ? (
                        pokemons.map((pokemon, index) => (
                            <PokemonCard
                                pokemon={pokemon}
                                index={index}
                                key={index}
                            />
                        ))
                    ) : (
                        showNoPokemonsMessage && (
                            <NoPokemonsFound color={theme.color}>
                                No pokémons found 🧐
                            </NoPokemonsFound>
                        )
                    )}
                </Pokemons>

                {inputRef.current !== null &&
                    inputRef.current.value.length < 1 &&
                    filteredType === '' && (
                        <LoadMorePkmButton onClick={() => loadMorePokemons()}>
                            Load More Pokémons
                        </LoadMorePkmButton>
                    )}

                <BackToTopButton />
            </Main>
        </>
    );
};

export { Home };
