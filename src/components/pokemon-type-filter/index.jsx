import { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { TypeContext } from "../../contexts/type-context";

const PokemonTypeFilter = ({ data, onFilter }) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [showTypes, setShowTypes] = useState(false);
    const { types } = useContext(TypeContext)

    useEffect(() => {
        onFilter(filteredPokemons);
    }, [filteredPokemons]);

    useEffect(() => {
        setFilteredPokemons(data)
    }, [data])

    const filterPokemons = (type) => {
        if (selectedType === type) {
            setSelectedType(null);
        } else {
            const filteredPokemon = data.filter(pokemon =>
                pokemon.types.some(pokemonType => pokemonType.type.name === type)
            );

            setSelectedType(type);
            setFilteredPokemons(filteredPokemon);
        }
    };

    return (
        <>
            <TypeContainer show={showTypes ? 1 : 0}>
                    {types.map((type, index) => (
                        <li key={index}>
                            <Button onClick={() => filterPokemons(type.name)} color={type.color}>
                                {type.name}
                            </Button>
                        </li>
                    ))}
                    <li>
                        <Button onClick={() => setFilteredPokemons(data)}>all</Button>
                    </li>
            </TypeContainer>

            <FilterTypeSpan onClick={() => setShowTypes(!showTypes)}>
                <Span>Filtrar tipos</Span>
            </FilterTypeSpan>
        </>
    );
};

const fallDown = keyframes`
    from {
        max-height: 0px;
    }
    to {
        max-height: 500px;
    }
`;

const riseUp = keyframes`
    from {
        max-height: 500px;
    }
    to {
        max-height: 0px;
    }
`;

const TypeContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #FF6347;
    width: 100%;
    padding: 20px 50px 10px 50px;
    overflow: hidden;
    animation: ${({ show }) => (show ? fallDown : riseUp)} 0.5s forwards;

    @media (max-width: 430px) {
        padding: 20px 20px 10px 20px;
    }
`;

const Button = styled.button`
    padding: 3px 0;
    width: 90px;
    border-radius: 5px;
    font-size: 14px;
    margin: 10px 20px;
    border: none;
    color: ${({ color }) => color ? "#ffff" : "#000000"};
    background-color: ${({ color }) => color};    
    cursor: pointer;

    &&::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 720px) {
        margin: 10px;
        width: 72px;
        padding: 2.5px 0;
    }

    @media (max-width: 430px) {
        font-size: 11px;
        width: 60px;
    }
`

const FilterTypeSpan = styled.div`
    background-color: #FF6347;
    width: 500px;
    height: 20px;
    display: flex;
    justify-content: center;
    border-radius: 0 0 20px 20px;
    cursor: pointer;

    @media (max-width: 1000px) {
        width: 60%;
    }
`

const Span = styled.span`
    color: #ffff;
    padding: 5px;
    transform: translateY(-50%);
    font-weight: 500;

    @media (max-width: 720px) {
        font-size: 15px;
    }

    @media (max-width: 430px) {
        font-size: 12px;
    }
`

export default PokemonTypeFilter;