import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }
        ).start(() => console.log('La animación ha finalizado'));

    //     Animated.timing(
    //         position,
    //         {
    //             toValue: 0,
    //             duration: 800,
    //             useNativeDriver: true,
    //             easing: Easing.bounce
    //         }
    //     ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0.5,
                duration: 400,
                useNativeDriver: true
            }
        ).start();

        // Animated.timing(
        //     position,
        //     {
        //         toValue: -100,
        //         duration: 800,
        //         useNativeDriver: true,
        //         easing: Easing.bounce
        //     }
        // ).start(() => console.log('vuelta'));
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}