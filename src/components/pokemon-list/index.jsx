import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import PokemonTypeFilter from "../pokemon-type-filter";
import ButtonLoadMore from "../button-load-more";
import { TypeContext } from "../../contexts/type-context";

const PokemonList = ({ pokemons, loadMorePokemons }) => {
    const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
    const { theme } = useContext(ThemeContext)
    const { types } = useContext(TypeContext)
    
    const handleFilter = (filteredPokemons) => {
        setFilteredPokemons(filteredPokemons);
    };

    return (
        <Section backgroundcolor={theme.background}>
            <PokemonTypeFilter data={pokemons} onFilter={handleFilter} />
            <PokemonContainer>
                <PokemonUl>
                    { filteredPokemons.length > 0 ?
                        filteredPokemons.map((pokemon, index) => (
                            <Link to={`/pokemon/${pokemon.id}`} state={{ pokemon: pokemon }} key={index}>
                                <PokemonCard backgroundcolor={theme.background}>
                                    <PokemonSprite src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />

                                    <PokemonDetailsContainer>
                                        <PokemonID id={theme.id}>#{pokemon.id.toString().padStart(4, '0')}</PokemonID>
                                        <PokemonName name={theme.name}>{pokemon.name}</PokemonName>
                                        <TypeUl>
                                            {
                                                pokemon.types.map((type, index) => (
                                                    <li key={index}>
                                                        <TypeName color={types.find(t => t.name === type.type.name).color}>{type.type.name}</TypeName>
                                                    </li>
                                                ))
                                            }
                                        </TypeUl>
                                    </PokemonDetailsContainer>
                                </PokemonCard>
                            </Link>
                        ))
                    : <Error>Pokémons not found 🤔</Error> }
                </PokemonUl>
            </PokemonContainer>

            <ButtonLoadMore loadMorePokemons={loadMorePokemons} />
        </Section>
    );
};

const Error = styled.p`
    font-size: 20px;
`

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background-color: ${({ backgroundcolor }) => backgroundcolor}; 
`

const PokemonContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const PokemonUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const PokemonCard = styled.li`
    background-color: ${({ backgroundcolor }) => backgroundcolor}; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    width: 230px;
    height: 270px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 530px) {
        width: 180px;
        height: 220px;
    }

    @media (max-width: 430px) {
        width: 154px;
        height: 210px;
    }
`;

const PokemonDetailsContainer = styled.div`
    width: 100%;
`

const PokemonSprite = styled.img`
    width: 150px;

    @media (max-width: 530px) {
        width: 110px;
    }
`

const PokemonID = styled.span`
    color: ${({ id }) => id};
    font-size: 13px;
    font-weight: 500;

    @media (max-width: 530px) {
        font-size: 11px;
    }
`

const PokemonName = styled.h5`
    color: ${({ name }) => name};
    font-size: 27px;
    font-weight: 400;
    
    &&::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 530px) {
        font-size: 20px;
    }
`

const TypeUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;

    @media (max-width: 530px) {
        margin-top: 10px;
    }
`

const TypeName = styled.p`
    color: #ffff;
    background-color: ${({ color }) => color}; 
    padding: 3px 0;
    width: 90px;
    border-radius: 5px;
    font-size: 14px;

    &&::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 530px) {
        width: 72px;
        padding: 2.5px 0;
    }

    @media (max-width: 430px) {
        font-size: 11px;
        width: 60px;
    }
`

export default PokemonList;