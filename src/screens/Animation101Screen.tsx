import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'
import React, { useRef, useEffect, useContext } from 'react'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {

  const { theme: { colors } } = useContext(ThemeContext);
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        backgroundColor: colors.primary,
        opacity: opacity,
        transform: [{
          translateX: position,
        }]
      }}>
      </Animated.View >

      <Animated.Text style={{
        opacity: opacity,
        transform: [{
          translateX: position,
        }]
      }}>
        Hola Mundo
      </Animated.Text>

      <Button
        color={colors.primary}
        title='FadeIn'
        onPress={() => {
          fadeIn();
          startMovingPosition(100, 400)
        }} />
      <Button
        color={colors.primary}
        title='FadeOut'
        onPress={() => {
          fadeOut();
          startMovingPosition(-100, 800)
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 300,
    height: 300,
  },
  button: {
    marginBottom: 20
  }
});