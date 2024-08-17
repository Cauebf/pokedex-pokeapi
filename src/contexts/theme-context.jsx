import { createContext, useState } from 'react';

export const themes = {
    light: {
        color: '#0f0f0f',
        background: '#ffffff',
        description: '#8F9396',
        buttonColor: '#ffffff',
        buttonBackground: '#242424',
        loadingPokeball: 'invert(1) grayscale(1)',
    },
    dark: {
        color: '#eeeeee',
        background: '#242424',
        description: '#B0B0B0',
        buttonColor: '#242424',
        buttonBackground: '#ffffff',
        loadingPokeball: 'none',
    },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
