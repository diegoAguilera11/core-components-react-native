import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React, { useContext } from 'react'
import { HeaderTitle } from '../components/HeaderTitle'
import prompt from 'react-native-prompt-android';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const AlertScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

    const viewAlert = () => {
        Alert.alert(
            'Titulo',
            'descripción',
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log('cancelado presionado'),
                    style: 'destructive',
                },
                {
                    text: "OK",
                    onPress: () => console.log('OK presionado'),
                    style: 'default',
                },
            ],
            {
                cancelable: true,
            }
        );
    }

    const showPrompt = () => {
        prompt(
            'Ingresa una palabra',
            'Lo ingresado en este campo no se puede revertir.',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: (text) => console.log('OK Pressed, password: ' + text) },
            ],
            {
                type: 'plain-text',
                cancelable: false,
                // defaultValue: 'test',
                placeholder: 'example'
            }
        );
    }

    return (
        <View style={styles.container}>
            <HeaderTitle title='Alerts' />
            <Button
                color={colors.primary}
                title='Mostrar Alerta'
                onPress={viewAlert}
            />
            <View style={{ height: 20 }}></View>
            <Button
                color={colors.primary}
                title='Mostrar Prompt'
                onPress={showPrompt}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
        // justifyContent: 'center',
        // alignItems:'center'
    },
    switchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    switchText: {
        fontSize: 25,
        color: 'black'
    }
});