import { createContext, useEffect, useReducer } from 'react';
import { ThemeAction, ThemeState, themeReducer } from './themeReducer';
import { useColorScheme } from 'react-native';

type ThemeContextProps = {
    theme: ThemeState;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: '#084F6A',
        background: '#FFF',
        card: 'white',
        text: '#000',
        border: '#000',
        notification: 'orange',
    },
    divideColor: 'rgba(0,0,0,0.7)',
    auxiliarColors: {
        textLight: 'red'
    }
}

const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: '#000',
        card: 'green',
        text: '#FFF',
        border: 'orange',
        notification: 'orange',
    },
    divideColor: 'rgba(0,0,0,0.7)',
    auxiliarColors: {
        textLight: 'red'
    }
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme();

    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme()
    }, [colorScheme])


    const [theme, dispatch] = useReducer(themeReducer, (colorScheme) === 'dark' ? darkTheme : lightTheme);

    const setLightTheme = () => {

        dispatch({
            type: 'light_theme',
            payload: lightTheme
        })
    }
    const setDarkTheme = () => {

        dispatch({
            type: 'dark_theme',
            payload: darkTheme
        })
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setLightTheme,
                setDarkTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
