import styled from 'styled-components';

export const FilterButton = styled.button`
    width: 60px;
    height: 55px;
    border: none;
    border-radius: 10px;
    background-color: #f2f2f2;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background-color: rgb(116, 116, 118, 0.1);
    }
`;

export const TypeUl = styled.ul`
    background-color: #ffff;
    position: absolute;
    z-index: 5;
    height: 360px;
    width: 250px;
    right: 65px;
    top: 192px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 11px;
    animation: slideDown 0.3s ease-in-out;

    @media (max-width: 650px) {
        right: 30px;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const TypeButton = styled.button`
    background-color: ${({ color }) => color};
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

    img {
        height: 16px;
    }

    span {
        color: #ffff;
        font-size: 13px;
        font-weight: 600;
        margin-left: 5px;
        text-transform: capitalize;
    }
`;
