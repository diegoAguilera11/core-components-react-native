import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setLightTheme, setDarkTheme, theme: { currentTheme, colors } } = useContext(ThemeContext);


    const setTheme = () => {
        console.log('Antes de cambiar el tema es: ', currentTheme)
        currentTheme === 'dark' ?
            setLightTheme()
            :
            setDarkTheme()
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Change Theme" />

            <TouchableOpacity
                onPress={setTheme}
                activeOpacity={0.8}
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 15,
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                }}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>Light / Dark</Text>
            </TouchableOpacity>
        </View>
    )
}