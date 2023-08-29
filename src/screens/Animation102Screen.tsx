import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native'
import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation102Screen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });


  return (
    <View style={styles.container}>
      <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(), {...styles.purpleBox, backgroundColor: colors.primary}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#54D5D5',
    width: 200,
    height: 200
  }
});