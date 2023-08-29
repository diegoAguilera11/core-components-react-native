import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useTheme } from '@react-navigation/native';

import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);
    // const { colors } = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Icon name={menuItem.icon} size={30} color={colors.primary} />
                    <Text style={{ ...styles.itemText, color: colors.text  }}>{menuItem.name}</Text>
                </View>
                <Icon name="chevron-forward-outline" size={30} color={colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    subContainer: {
        flexDirection: 'row',
    },
    itemText: {
        marginHorizontal: 15,
        fontSize: 20
    }
});
