import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

export const ArrowLeftIcon = styled(FaChevronLeft)`
    color: #ffffff;
    transition: 0.3s;
    position: absolute;
    top: 20px;
    left: 15px;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        height: 40px;
        left: 10px;
    }
`;

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokeInfoContainer = styled.div`
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    margin-top: 320px;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -10px 80px rgba(0, 0, 0, 0.05);

    @media (max-width: 1160px) {
        margin-top: 240px;
    }

    @media (max-width: 800px) {
        margin-top: 170px;
    }

    @media (max-width: 525px) {
        padding: 50px 15px 20px 15px;
    }
`;

export const PokemonSprite = styled.img`
    height: 300px;
    width: 310px;
    position: absolute;
    top: -210px;
    image-rendering: ${({ rendering }) => rendering};

    @media (max-width: 1160px) {
        height: 250px;
        width: 260px;
        top: -175px;
    }

    @media (max-width: 800px) {
        height: 150px;
        width: 160px;
        top: -105px;
    }
`;

export const PokemonID = styled.span`
    color: ${({ color }) => color};
    font-size: 17px;
    font-weight: 600;
    margin-top: 50px;

    @media (max-width: 1160px) {
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        font-size: 14px;
        margin-top: 7px;
    }
`;

export const PokemonName = styled.h2`
    color: ${({ color }) => color};
    font-size: 38px;
    margin-top: 10px;
    text-transform: capitalize;

    @media (max-width: 1160px) {
        font-size: 34px;
    }

    @media (max-width: 800px) {
        font-size: 25px;
    }
`;

export const TypeUl = styled.ul`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TypeLi = styled.li`
    background-color: ${({ type }) => type.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0 5px;
    min-width: 92px;
    border-radius: 4px;

    img {
        height: 15px;
    }

    span {
        color: #ffff;
        font-size: 13px;
        font-weight: 500;
        margin-left: 5px;
        text-transform: capitalize;
    }
`;

export const PokemonEntryTitle = styled.h3`
    margin-top: 35px;
    color: ${({ color }) => color};
    font-size: 24px;

    @media (max-width: 1160px) {
        font-size: 20px;
    }

    @media (max-width: 800px) {
        font-size: 17px;
        margin-top: 23px;
    }
`;

export const PokemonEntryText = styled.p`
    color: ${({ color }) => color};
    margin-top: 13px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 15px;
    }
`;

export const DataContainer = styled.div`
    display: grid;
    grid:
        'pokedex-data stats moves'
        'abilities stats moves';
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px 0;
    height: 100%;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 1160px) {
        grid:
            'pokedex-data abilities'
            'stats moves';
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        grid:
            'pokedex-data abilities'
            'stats stats'
            'moves moves';
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto-fill repeat(2, 1fr);
        gap: 20px 5px;
        margin-top: 20px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const DataTitle = styled.h3`
    color: ${({ color }) => color};
    font-size: 24px;

    @media (max-width: 1160px) {
        font-size: 20px;
    }

    @media (max-width: 800px) {
        font-size: 17px;
    }
`;

export const DataUl = styled.ul`
    padding: 0 40px;
    margin-top: 15px;
    width: 100%;

    @media (max-width: 800px) {
        padding: 0;
    }

    li {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 5px;

        @media (max-width: 800px) {
            margin-top: 7px;
        }
    }
`;

export const DataSubTitle = styled.h4`
    color: ${({ color }) => color};
    font-size: 18px;
    text-transform: capitalize;

    @media (max-width: 1160px) {
        font-size: 16px;
    }

    @media (max-width: 800px) {
        font-size: 14px;
    }
`;

export const DataDescription = styled.span`
    color: ${({ color }) => color};
    font-weight: 500;

    &::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 800px) {
        font-size: 13.5px;
    }
`;

export const HiddenAbility = styled.span`
    color: ${({ color }) => color};
    font-size: 16px;
    font-weight: 500;
    text-transform: lowercase;

    @media (max-width: 800px) {
        font-size: 11px;
    }
`;

export const StatsUl = styled.ul`
    width: 100%;
    padding-right: 50px;

    @media (max-width: 800px) {
        padding-right: 10px;
    }

    li {
        display: flex;
        align-items: center;
        margin-top: 28px;

        @media (max-width: 1160px) {
            margin-top: 20px;
        }

        @media (max-width: 800px) {
            margin-top: 10px;
        }
    }
`;

export const StatName = styled.span`
    flex: 1;
    color: ${({ color }) => color};
    font-weight: 500;

    @media (max-width: 800px) {
        font-size: 14px;
    }
`;

export const StatBarContainer = styled.div`
    position: relative;
    flex: 7;
    background-color: #eee;
    border-radius: 10px;
    height: 23px;
    overflow: hidden;

    @media (max-width: 1500px) {
        flex: 4;
    }

    @media (max-width: 800px) {
        height: 17px;
    }
`;

export const StatBar = styled.div`
    height: 100%;
    align-self: flex-start;
    width: ${({ width }) => width}%;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    transition: width 0.3s ease-in-out;
`;

export const StatValue = styled.span`
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    color: #ffff;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 800px) {
        font-size: 12px;
        left: 5px;
    }
`;

export const MovesUl = styled.ul`
    max-height: 290px;
    width: 100%;
    padding: 0 20px;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    overflow-y: scroll;

    @media (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1160px) {
        grid-template-columns: repeat(4, 1fr);
        max-height: 230px;
    }

    @media (max-width: 920px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(5, 1fr);
        max-height: 200px;
    }

    @media (max-width: 620px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 525px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const MoveLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    padding: 5px;
    border-radius: 5px;
    max-width: 115px;

    span {
        color: #ffff;
        font-size: 14px;
        font-weight: 500;

        @media (max-width: 1750px) {
            font-size: 12px;
        }

        @media (max-width: 800px) {
        }
    }
`;
