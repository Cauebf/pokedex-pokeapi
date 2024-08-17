import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonLi = styled.li`
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    border-radius: 10px;
    min-width: 230px;
    height: 150px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 12px 0px;
    transition: transform 0.1s;
    opacity: ${({ isimageloaded }) => (isimageloaded ? '1' : '0.5')};
    filter: ${({ isimageloaded }) =>
        isimageloaded ? 'none' : 'grayscale(100%)'};

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 555px) {
        min-width: 150px;
        height: 140px;
    }

    div {
        z-index: 1;
        width: 100%;

        h3 {
            color: #ffff;
            font-size: 19px;
            margin-top: 5px;
            text-transform: capitalize;

            @media (max-width: 720px) {
                font-size: 17px;
            }
        }

        ul {
            margin-top: 15px;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
`;

export const CardLink = styled(Link)`
    height: 100%;
    padding: 40px 10px 10px 10px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

export const PokemonSprite = styled.img`
    position: absolute;
    top: -50px;
    z-index: 2;
    max-height: 95px;
    image-rendering: ${({ rendering }) => rendering};
`;

export const PokeballSvg = styled.img`
    position: absolute;
    opacity: 0.15;
    top: 0;

    @media (max-width: 650px) {
        height: 130px;
    }
`;

export const PokemonID = styled.span`
    color: rgba(23, 23, 27, 0.6);
    font-size: 13px;
    font-weight: 600;

    @media (max-width: 530px) {
        font-size: 12px;
    }
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

    @media (max-width: 560px) {
        min-width: 55px;
        padding: 4px 5px;
    }

    @media (max-width: 385px) {
        min-width: 92px;
        padding: 5px;
    }

    img {
        height: 15px;

        @media (max-width: 530px) {
            height: 13px;
        }

        @media (max-width: 400px) {
            height: 12px;
        }
    }

    span {
        color: #ffff;
        font-size: 13px;
        font-weight: 500;
        margin-left: 5px;
        text-transform: capitalize;

        @media (max-width: 650px) {
            font-size: 12px;
        }

        @media (max-width: 420px) {
            font-size: 11px;
        }

        @media (max-width: 385px) {
            font-size: 13px;
        }
    }
`;
