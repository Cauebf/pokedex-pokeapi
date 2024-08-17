import styled, { css } from 'styled-components';

export const Main = styled.main`
    min-height: 100vh;
    padding: 50px 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ backgroundcolor }) => backgroundcolor};

    @media (max-width: 650px) {
        padding: 50px 30px;
    }
`;

export const H1 = styled.h1`
    font-size: 50px;
    align-self: start;
    color: ${({ color }) => color};
    cursor: pointer;

    @media (max-width: 481px) {
        font-size: 45px;
    }
`;

export const SearchContainer = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    margin-top: 20px;
    display: flex;
    align-items: center;
    border: ${({ isfocused }) =>
        isfocused ? `2px solid #E6E6E6` : `2px solid #f2f2f2`};
    border-radius: 10px;
`;

export const Pokemons = styled.ul`
    width: 100%;
    ${({ isloading, nopokemonsfound }) =>
        isloading || nopokemonsfound
            ? css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 60vh;
              `
            : css`
                  width: 100%;
                  display: grid;
                  grid-template-columns: repeat(6, 1fr);
                  gap: 60px;
                  margin: 70px 0 50px 0;

                  @media (max-width: 1750px) {
                      grid-template-columns: repeat(4, 1fr);
                  }

                  @media (max-width: 1245px) {
                      grid-template-columns: repeat(3, 1fr);
                  }

                  @media (max-width: 960px) {
                      grid-template-columns: repeat(2, 1fr);
                  }

                  @media (max-width: 670px) {
                      column-gap: 20px;
                  }

                  @media (max-width: 385px) {
                      grid-template-columns: repeat(1, 1fr);
                  }
              `}
`;

export const Loading = styled.img`
    height: 60px;
    animation: spin 2.5s linear infinite;
    margin: auto;
    filter: ${({ filter }) => filter};

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const NoPokemonsFound = styled.span`
    color: ${({ color }) => color};
    font-size: 20px;
    font-weight: 500;
`;

export const LoadMorePkmButton = styled.button`
    background-color: #1e90ff;
    color: #ffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    @media (max-width: 530px) {
        font-size: 14px;
    }

    &:hover {
        background-color: #369cffc4;
    }
`;
