import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
    globalMargin: {
        marginHorizontal: 20
    }
});