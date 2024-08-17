import styled from 'styled-components';

export const Input = styled.input`
    background: #f2f2f2 url('/svg/search.svg') no-repeat 17px center;
    width: 100%;
    align-self: start;
    padding: 18px 10px 18px 55px;
    font-size: 18px;
    color: rgb(116, 116, 118, 0.8);
    border-radius: 10px 0 0 10px;
    border: none;

    &::placeholder {
        color: rgb(116, 116, 118, 0.8);
    }
`;
