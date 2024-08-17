import styled from 'styled-components';

export const ToggleContainer = styled.div`
    position: absolute;
    top: 80.5px;
    right: 65px;
    transform: translateY(-50%);

    @media (max-width: 650px) {
        right: 30px;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
        transition: 0.3s;
    }
`;

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 2em;
    height: 1em;
    background-color: #ccc;
    border-radius: 1em;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0.1em;
        left: 0.1em;
        width: 0.8em;
        height: 0.8em;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }

    &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.2em;
        font-size: 1.5em;
        transition: 0.3s;
    }

    &:hover::before {
        background-color: #999;
    }

    input:checked + & {
        background-color: #666;
    }

    input:checked + &::before {
        transform: translateX(1em);
    }

    input:checked + &::after {
        left: 0.2em;
        right: auto;
    }
`;
