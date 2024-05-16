import { createContext } from "react";

const types = [
    {
        name: 'fire',
        color: '#EE8130'
    },
    {
        name: 'water',
        color: '#6390F0'
    },
    {
        name: 'grass',
        color: '#7AC74C'
    },
    {
        name: 'electric',
        color: '#F7D02C'
    },
    {
        name: 'ice',
        color: '#96D9D6'
    },
    {
        name: 'fighting',
        color: '#C22E18'
    },
    {
        name: 'poison',
        color: '#A33EA1'
    },
    {
        name: 'ground',
        color: '#E2BF65'
    },
    {
        name: 'flying',
        color: '#A98FF3'
    },
    {
        name: 'psychic',
        color: '#F95587'
    },
    {
        name: 'bug',
        color: '#A6B91A'
    },
    {
        name: 'rock',
        color: '#B6A136'
    },
    {
        name: 'ghost',
        color: '#735797'
    },
    {
        name: 'dark',
        color: '#705746'
    },
    {
        name: 'dragon',
        color: '#6F35FC'
    },
    {
        name: 'steel',
        color: '#B7B7CE'
    },
    {
        name: 'fairy',
        color: '#D685AD'
    },
    {
        name: 'normal',
        color: '#A8A77A'
    },
];

export const TypeContext = createContext({})

export const TypeProvider = (props) => {
    return ( 
        <TypeContext.Provider value={{types}}>
            {props.children}
        </TypeContext.Provider>
    )
}