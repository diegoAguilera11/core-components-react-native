import { View, Text, Switch, StyleSheet, Platform } from 'react-native'
import React, { useContext, useState } from 'react'


import { HeaderTitle } from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [state, setstate] = useState({
        isActivity: true,
        isAngry: false,
        isHappy: true
    })

    const onChange = (value: boolean, field: string) => {
        setstate({
            ...state,
            [field]: value
        })
    }
    return (
        <View style={styles.container}>
            <HeaderTitle title='Switches' />

            <View style={styles.switchBox}>
                <Text style={{ color: colors.text, fontSize: 20 }}>Is Activity</Text>
                <CustomSwitch
                    isOn={true}
                    onChange={(value) => onChange(value, 'isActivity')}
                />
            </View>

            <View style={styles.switchBox}>
                <Text style={{ color: colors.text, fontSize: 20 }}>Is Angry</Text>
                <CustomSwitch
                    isOn={true}
                    onChange={(value) => onChange(value, 'isAngry')}
                />
            </View>

            <View style={styles.switchBox}>
                <Text style={{ color: colors.text, fontSize: 20 }}>Is Happy</Text>
                <CustomSwitch
                    isOn={true}
                    onChange={(value) => onChange(value, 'isHappy')}
                />
            </View>

            <Text style={{ ...styles.switchText, color: colors.text  }}>
                {JSON.stringify(state, null, 10)}
            </Text>
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