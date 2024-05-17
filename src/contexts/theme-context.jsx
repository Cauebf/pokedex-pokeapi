import { createContext, useState } from "react";

export const themes = {
    light: {
        name: '#242424',
        background: '#ffffff',
        id: '#919191',
    },
    dark: {
        name: '#eeeeee',
        background: '#242424',
        id: '#cccccc',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return ( 
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}