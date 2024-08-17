import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAbilities, getMoves, getSpecies } from '../../services/poke-api';
import { TypeContext } from '../../contexts/type-context';
import { ThemeContext, themes } from '../../contexts/theme-context';
import useLocalStorage from 'use-local-storage';
import {
    ArrowLeftIcon,
    Container,
    DataContainer,
    DataDescription,
    DataSubTitle,
    DataTitle,
    DataUl,
    HiddenAbility,
    MoveLi,
    MovesUl,
    PokeInfoContainer,
    PokemonEntryText,
    PokemonEntryTitle,
    PokemonID,
    PokemonName,
    PokemonSprite,
    StatBar,
    StatBarContainer,
    StatName,
    StatsUl,
    StatValue,
    TypeLi,
    TypeUl,
} from './styles';

const Pokemon = () => {
    const location = useLocation();
    const { pokemon } = location.state || {};
    const { types } = useContext(TypeContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const [storedTheme] = useLocalStorage('theme', 'light');
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);
    const [species, setSpecies] = useState({});
    const [sprite, setSprite] = useState({});
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setTheme(storedTheme === 'light' ? themes.light : themes.dark);

        const fetchSpecies = async () => {
            const data = await getSpecies(pokemon.species.url);
            const englishEntry = data.flavor_text_entries
                .find((entry) => entry.language.name === 'en')
                .flavor_text.replace(/\f/g, ' ');
            const englishCategory = data.genera.find(
                (category) => category.language.name === 'en'
            ).genus;

            setSpecies({
                name: data.name,
                entry: englishEntry,
                category: englishCategory,
            });
        };

        const fetchAbilities = async () => {
            const detailedAbilities = await Promise.all(
                pokemon.abilities.map(async (ability) => {
                    const data = await getAbilities(ability.ability.url);
                    const englishText = data.flavor_text_entries
                        .find((entry) => entry.language.name === 'en')
                        .flavor_text.replace(/\f/g, ' ');
                    const isHidden = data.pokemon.find(
                        (pkm) => pkm.pokemon.name === pokemon.name
                    ).is_hidden;

                    return {
                        name: data.name,
                        text: englishText,
                        isHidden: isHidden,
                    };
                })
            );

            setAbilities(detailedAbilities);
        };

        const fetchMoves = async () => {
            const detailedMoves = await Promise.all(
                pokemon.moves.map(async (move) => {
                    const data = await getMoves(move.move.url);

                    return {
                        name: data.name,
                        type: data.type.name,
                    };
                })
            );

            setMoves(detailedMoves);
        };

        const pokemonSprite = () => {
            if (
                pokemon.sprites.versions['generation-v']['black-white'].animated
                    .front_default !== null
            ) {
                return {
                    sprite: pokemon.sprites.versions['generation-v'][
                        'black-white'
                    ].animated.front_default,
                    rendering: 'pixelated',
                };
            } else if (pokemon.sprites.front_default !== null) {
                return {
                    sprite: pokemon.sprites.front_default,
                    rendering: 'pixelated',
                };
            } else {
                return {
                    sprite: '/images/pikachu-silhouette.png',
                    rendering: 'auto',
                };
            }
        };

        const PokemonStats = () =>
            pokemon.stats.map((stat, index) => ({
                name: ['HP', 'Atk', 'Def', 'SpAtk', 'SpDef', 'SpD'][index],
                value: stat.base_stat,
            }));

        fetchSpecies();
        fetchAbilities();
        fetchMoves();
        setStats(PokemonStats());
        setSprite(pokemonSprite());
    }, [pokemon]);

    return (
        <Container
            backgroundcolor={
                types.find((t) => t.name === pokemon.types[0].type.name)
                    .cardColor
            }
        >
            <Link to="/">
                <ArrowLeftIcon size={50} />
            </Link>

            <PokeInfoContainer backgroundcolor={theme.background}>
                <PokemonSprite
                    src={sprite.sprite}
                    alt={pokemon.name}
                    rendering={sprite.rendering}
                />
                <PokemonID color={theme.description}>#{pokemon.id}</PokemonID>
                <PokemonName color={theme.color}>{pokemon.name}</PokemonName>

                <TypeUl>
                    {pokemon.types.map((pokemonType, index) => (
                        <TypeLi
                            key={index}
                            type={types.find(
                                (t) => t.name === pokemonType.type.name
                            )}
                        >
                            <img
                                src={
                                    types.find(
                                        (t) => t.name === pokemonType.type.name
                                    ).svg
                                }
                                alt={`${pokemonType.type.name} icon`}
                            />
                            <span>{pokemonType.type.name}</span>
                        </TypeLi>
                    ))}
                </TypeUl>

                <PokemonEntryTitle color={theme.color}>
                    Pokédex Entry
                </PokemonEntryTitle>
                <PokemonEntryText color={theme.description}>
                    {species.entry}
                </PokemonEntryText>

                <DataContainer>
                    <div style={{ gridArea: 'pokedex-data' }}>
                        <DataTitle
                            color={
                                types.find(
                                    (t) => t.name === pokemon.types[0].type.name
                                ).color
                            }
                        >
                            Pokédex Data
                        </DataTitle>

                        <DataUl>
                            <li>
                                <DataSubTitle color={theme.color}>
                                    Species
                                </DataSubTitle>
                                <DataDescription color={theme.description}>
                                    {species.name}
                                </DataDescription>
                            </li>
                            <li>
                                <DataSubTitle color={theme.color}>
                                    Category
                                </DataSubTitle>
                                <DataDescription color={theme.description}>
                                    {species.category}
                                </DataDescription>
                            </li>
                            <li>
                                <DataSubTitle color={theme.color}>
                                    Height
                                </DataSubTitle>
                                <DataDescription color={theme.description}>
                                    {pokemon.height / 10} m
                                </DataDescription>
                            </li>
                            <li>
                                <DataSubTitle color={theme.color}>
                                    Weight
                                </DataSubTitle>
                                <DataDescription color={theme.description}>
                                    {pokemon.weight / 10} kg
                                </DataDescription>
                            </li>
                        </DataUl>
                    </div>

                    <div style={{ gridArea: 'abilities' }}>
                        <DataTitle
                            color={
                                types.find(
                                    (t) => t.name === pokemon.types[0].type.name
                                ).color
                            }
                        >
                            Abilities
                        </DataTitle>

                        <DataUl>
                            {abilities.map((ability, index) => (
                                <li key={index}>
                                    <DataSubTitle color={theme.color}>
                                        {ability.name}{' '}
                                        <HiddenAbility
                                            color={theme.description}
                                        >
                                            {ability.isHidden &&
                                                '(hidden ability)'}
                                        </HiddenAbility>
                                    </DataSubTitle>
                                    <DataDescription color={theme.description}>
                                        {ability.text}
                                    </DataDescription>
                                </li>
                            ))}
                        </DataUl>
                    </div>

                    <div style={{ gridArea: 'stats' }}>
                        <DataTitle
                            color={
                                types.find(
                                    (t) => t.name === pokemon.types[0].type.name
                                ).color
                            }
                        >
                            Stats
                        </DataTitle>

                        <StatsUl>
                            {stats.map((stat, index) => (
                                <li key={index}>
                                    <StatName color={theme.description}>
                                        {stat.name}
                                    </StatName>
                                    <StatBarContainer>
                                        <StatBar
                                            width={(stat.value / 255) * 100}
                                            backgroundcolor={
                                                types.find(
                                                    (t) =>
                                                        t.name ===
                                                        pokemon.types[0].type
                                                            .name
                                                ).color
                                            }
                                        />
                                        <StatValue>{stat.value}</StatValue>
                                    </StatBarContainer>
                                </li>
                            ))}
                        </StatsUl>
                    </div>

                    <div style={{ gridArea: 'moves' }}>
                        <DataTitle
                            color={
                                types.find(
                                    (t) => t.name === pokemon.types[0].type.name
                                ).color
                            }
                        >
                            Moves
                        </DataTitle>

                        <MovesUl>
                            {moves.map((move, index) => (
                                <MoveLi
                                    key={index}
                                    backgroundcolor={
                                        types.find((t) => t.name === move.type)
                                            .color
                                    }
                                >
                                    <span>{move.name}</span>
                                </MoveLi>
                            ))}
                        </MovesUl>
                    </div>
                </DataContainer>
            </PokeInfoContainer>
        </Container>
    );
};

export { Pokemon };
