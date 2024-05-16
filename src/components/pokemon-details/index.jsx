import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context"
import getAbilityDetails from "../../services/abilities-details";
import getMoveDetails from "../../services/moves-details"
import styled from "styled-components";
import { TypeContext } from "../../contexts/type-context";
import Header from "../header";

const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext)
    const { types } = useContext(TypeContext)
    const location = useLocation();
    const pokemon = location.state.pokemon;
    const [abilities, setAbilities] = useState([])
    const [moves, setMoves] = useState([])
    const [detailedMoves, setDetailedMoves] = useState([])

    useEffect(() => {
        const fetchAbilities = async () => {
            const abilityData = await Promise.all(
                pokemon.abilities.map(async (pokemonAbility) => {
                    const response = await getAbilityDetails(pokemonAbility.ability.url)

                    return {
                        name: response.name,
                        description: response.effect_entries.find((effect) => effect.language.name === "en").effect
                    }
                })
            )

            setAbilities(abilityData)
        }

        fetchAbilities()
    }, [pokemon])

    useEffect(() => {
        const fetchMoves = async () => {
            const moveData = await Promise.all(
                pokemon.moves.map(async (pokemonMove) => {
                    const response = await getMoveDetails(pokemonMove.move.url)

                    return {
                        name: pokemonMove.move.name,
                        type: response.type.name
                    }
                })
            )

            setDetailedMoves(moveData)
            setMoves(moveData.splice(0, 10))
        }

        fetchMoves()
    }, [pokemon])

    const handleClick = () => {
        setMoves([...moves, ...detailedMoves.splice(0, 10)])
    }

    return (
        <>            
            <Header />

            <Section backgroundcolor={theme.background}>
                <ContainerLeft>
                    <NameContainer>
                        <PokemonName name={theme.name}>{pokemon.name}</PokemonName>
                        <PokemonID id={theme.id}>#{pokemon.id.toString().padStart(4, '0')}</PokemonID>
                    </NameContainer>

                    <PokemonSprite src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemon.name} />
                </ContainerLeft>

                <ContainerRight>
                    <DetailsContainer>
                        <div>
                            <TypesTitle>Types:</TypesTitle>
                            <TypeUl>
                                {
                                    pokemon.types.map((type, index) => (
                                        <TypeLi key={index} color={types.find(t => t.name === type.type.name).color}>
                                            <TypeName>{type.type.name}</TypeName>
                                        </TypeLi>
                                    ))
                                }
                            </TypeUl>
                        </div>

                        <div>
                            <AbilitiesTitle>Abilities:</AbilitiesTitle>
                            <ul>
                                {
                                    abilities.map((ability, index) => (
                                        <li key={index}>
                                            <AbilityName>{ability.name}</AbilityName>
                                            <AbilityDescription>{ability.description}</AbilityDescription>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <MovesTitle>Moves:</MovesTitle>
                        <MoveContainer>
                            <MovesUl>
                                {
                                    moves.map((move, index) => (
                                        <MovesLi key={index} color={types.find(t => t.name === move.type).color}>
                                            <MoveName>{move.name}</MoveName>
                                        </MovesLi>
                                    ))
                                }
                            </MovesUl>

                            <MoreMovesButton onClick={handleClick}>Load more moves</MoreMovesButton>
                        </MoveContainer>
                    </DetailsContainer>
                </ContainerRight>
            </Section>
        </>
    );
};

const Section = styled.section`
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    display: grid;
    grid-template-areas: "container-left container-right";
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    padding: 80px;
`

const ContainerLeft = styled.div`
    grid-area: container-left; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
`

const NameContainer = styled.div`
    display: flex;
    align-items: center;
`

const PokemonName = styled.h2`
    color: ${({ name }) => name};
    font-size: 50px;
    margin-right: 20px;

    &&::first-letter {
        text-transform: uppercase;
    }
`

const PokemonID = styled.span`
    color: ${({ id }) => id};
    font-size: 50px;
    font-weight: 500;

    @media (max-width: 530px) {
        font-size: 11px;
    }
`

const PokemonSprite = styled.img`
    width: 500px;   
    margin-top: 50px;
`

const ContainerRight = styled.div`
    grid-area: container-right; 
    display: flex;
    flex-direction: column;    
    justify-content: center;
`

const DetailsContainer = styled.div`
    background-color: #1E90FF;
    min-height: 100%;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px;
    border-radius: 20px;
`

const TypesTitle = styled.h3`
    font-size: 35px;
    color: #eeeeee;
`

const TypeUl = styled.ul`
    display: flex;
    text-align: center;
`

const TypeLi = styled.li`
    background-color: ${({ color }) => color}; 
    padding: 5px 30px;
    border-radius: 5px;
    margin: 20px 30px 0 0;
`

const TypeName = styled.p`
    color: #ffff;
    width: 90px;
    font-size: 20px;

    &&::first-letter {
        text-transform: uppercase;
    }
`

const AbilitiesTitle = styled.h3`
    font-size: 35px;
    margin-top: 20px; 
    color: #eeeeee;
`

const AbilityName = styled.h5`
    font-size: 25px;
    margin-top: 10px;

    &&::first-letter {
        text-transform: uppercase;
    }
`

const AbilityDescription = styled.p`
    font-weight: 500;
    margin-top: 5px;
`

const MoveContainer = styled.div`
    text-align: center;
`

const MovesTitle = styled.h3`
    color: #eeeeee;
    font-size: 35px;
    margin-top: 15px; 
`

const MovesUl = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const MovesLi = styled.li`
    margin: 10px;
    background-color: ${({ color }) => color};
    padding: 4px 20px;
    border-radius: 3px;
`

const MoveName = styled.p`
    color: #eeeeee;
    font-size: 14px;
    font-weight: 500;

    &&::first-letter {
        text-transform: uppercase;
    }
`

const MoreMovesButton = styled.button`
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    padding: 6px 10px;
    cursor: pointer;
`

export default PokemonDetails;