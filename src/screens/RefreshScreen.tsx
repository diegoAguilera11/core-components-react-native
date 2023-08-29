import { View, Text, ScrollView, RefreshControl, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'

export const RefreshScreen = () => {

  const [refreshing, setrefreshing] = useState(false);


  const onRefreshing = () => {
    setrefreshing(true);

    setTimeout(() => {
      console.log('desde function');
      setrefreshing(false);
    }, 3000);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefreshing}
          progressViewOffset={50}
          colors={['#6750a4', '#ea044d', '#046ce9']}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to Refresh' />
      </View>
    </ScrollView>
  )
}
