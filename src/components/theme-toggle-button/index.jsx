import React, { useContext, useEffect } from 'react';
import { ThemeContext, themes } from '../../contexts/theme-context';
import useLocalStorage from 'use-local-storage';
import { Label, ToggleContainer } from './styles';

const ThemeTogglerButton = () => {
    const { setTheme } = useContext(ThemeContext);
    const [storedTheme, setStoredTheme] = useLocalStorage('theme', 'light');

    useEffect(() => {
        setTheme(storedTheme === 'light' ? themes.light : themes.dark);
    }, []);

    const handleChange = () => {
        const newTheme = storedTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme === 'light' ? themes.light : themes.dark);
        setStoredTheme(newTheme);
    };

    return (
        <ToggleContainer>
            <input
                type="checkbox"
                id="darkmode-toggle"
                onChange={handleChange}
                checked={storedTheme !== 'light'}
            />
            <Label htmlFor="darkmode-toggle"></Label>
        </ToggleContainer>
    );
};

export default ThemeTogglerButton;
