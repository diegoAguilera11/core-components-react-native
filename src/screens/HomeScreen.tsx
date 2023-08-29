import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
export const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View style={{
                borderBottomWidth: 1,
                opacity: 0.2,
                marginVertical: 8
            }}>

            </View>
        )
    }
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones de Ménu'/>}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}
