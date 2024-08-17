import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const Button = styled.button`
    position: fixed;
    z-index: 99;
    height: 50px;
    width: 50px;
    right: 20px;
    bottom: 20px;
    border: none;
    border-radius: 16px;
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: translateY(-2px);
    }
`;

export const ArrowUpIcon = styled(IoIosArrowUp)`
    color: ${({ color }) => color};
`;
