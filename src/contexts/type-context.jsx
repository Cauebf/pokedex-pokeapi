import { createContext } from 'react';

const types = [
    {
        name: 'bug',
        color: '#A8B820',
        cardColor: '#BDB76B',
        svg: '/svg/bug.svg',
    },
    {
        name: 'dark',
        color: '#705848',
        cardColor: '#8c7a63',
        svg: '/svg/dark.svg',
    },
    {
        name: 'dragon',
        color: '#7038F8',
        cardColor: '#483D8B',
        svg: '/svg/dragon.svg',
    },
    {
        name: 'electric',
        color: '#F8D030',
        cardColor: '#FFD700',
        svg: '/svg/electric.svg',
    },
    {
        name: 'fairy',
        color: '#D685AD',
        cardColor: '#EBA8C3',
        svg: '/svg/fairy.svg',
    },
    {
        name: 'fighting',
        color: '#BC5442',
        cardColor: '#EA5D60',
        svg: '/svg/fighting.svg',
    },
    {
        name: 'fire',
        color: '#F08030',
        cardColor: '#FFA07A',
        svg: '/svg/fire.svg',
    },
    {
        name: 'flying',
        color: '#A98FF3',
        cardColor: '#B0C4DE',
        svg: '/svg/flying.svg',
    },
    {
        name: 'ghost',
        color: '#705898',
        cardColor: '#8571BE',
        svg: '/svg/ghost.svg',
    },
    {
        name: 'grass',
        color: '#9bcc50',
        cardColor: '#8BBE8A',
        svg: '/svg/grass.svg',
    },
    {
        name: 'ground',
        color: '#E0C068',
        cardColor: '#D2B48C',
        svg: '/svg/ground.svg',
    },
    {
        name: 'ice',
        color: '#98D8D8',
        cardColor: '#ADDDDD',
        svg: '/svg/ice.svg',
    },
    {
        name: 'normal',
        color: '#A8A878',
        cardColor: '#C0C0C0',
        svg: '/svg/normal.svg',
    },
    {
        name: 'poison',
        color: '#A552CC',
        cardColor: '#9F6E97',
        svg: '/svg/poison.svg',
    },
    {
        name: 'psychic',
        color: '#F85888',
        cardColor: '#FF69B4',
        svg: '/svg/psychic.svg',
    },
    {
        name: 'rock',
        color: '#BAAB82',
        cardColor: '#D4C294',
        svg: '/svg/rock.svg',
    },
    {
        name: 'steel',
        color: '#B8B8D0',
        cardColor: '#B5B9C4',
        svg: '/svg/steel.svg',
    },
    {
        name: 'water',
        color: '#6890F0',
        cardColor: '#58ABF6',
        svg: '/svg/water.svg',
    },
];

export const TypeContext = createContext({});

export const TypeProvider = (props) => {
    return (
        <TypeContext.Provider value={{ types }}>
            {props.children}
        </TypeContext.Provider>
    );
};
