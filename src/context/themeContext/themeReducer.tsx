import { Theme } from "@react-navigation/native"

type AuxiliarColorsProps = {
    textLight: string;
}


export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    divideColor: string;
    auxiliarColors: AuxiliarColorsProps
}

export type ThemeAction =
    | { type: 'light_theme', payload: ThemeState }
    | { type: 'dark_theme', payload: ThemeState }




export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'light_theme':
            return {
                ...action.payload
            };
        case 'dark_theme':
            return {
                ...action.payload
            };
        default:
            return state;
    }
}