import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";

const ThemeTogglerButton = () => {
    const { setTheme } = useContext(ThemeContext)
    const [ storedTheme, setStoredTheme ] = useLocalStorage("theme", "light")

    useEffect(() => {
        setTheme(storedTheme === "light" ? themes.light : themes.dark)
    }, [])

    const handleChange = () => {
        const newTheme = storedTheme === "light" ? "dark" : "light"
        setTheme(newTheme === "light" ? themes.light : themes.dark)
        setStoredTheme(newTheme)
    };

    return (
        <ToggleContainer>
            <Toggle type="checkbox" id="darkmode-toggle" onChange={handleChange} checked={storedTheme !== "light"}/>
            <Label htmlFor="darkmode-toggle"></Label>
        </ToggleContainer>
    );
};

const ToggleContainer = styled.div`
    position: absolute;
    top: 2.5em;
    right: 2.5em;
`;

const Toggle = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
    transition: 0.3s;
`;

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 2em;
    height: 1em;
    background-color: #ccc;
    border-radius: 1em;
    cursor: pointer;

    &::before {
        content: "";
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

export default ThemeTogglerButton;
