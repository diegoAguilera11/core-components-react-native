import React, { useContext, useRef, useState } from 'react'
import { View, Text, SafeAreaView, ImageSourcePropType, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemeContext } from '../context/themeContext/ThemeContext';


import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'



const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  }
]

export const SlidesScreen = () => {

  const { theme: { auxiliarColors, colors } } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 0.5,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 30,
          justifyContent: 'center'
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350, height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{ ...stylesAux.title, color: colors.text }} >{item.title}</Text>
        <Text style={{ ...stylesAux.subTitle, color: colors.text }}>{item.desc}</Text>

      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <HeaderTitle title='SlidesScreen' />
      <Carousel
        autoPlay={false}
        width={screenWidth}
        data={items}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
        renderItem={({ item }) => renderItem(item)}
        pagingEnabled
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
        }}>
        {items.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <TouchableOpacity key={i} onPress={() => setActiveIndex(i)} disabled>
              <View
                style={{
                  backgroundColor: isActive ? colors.text : auxiliarColors.textLight,
                  width: 10,
                  height: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  bottom: (screenHeight / 5),
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  )
}


const stylesAux = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  inactivePaginationDot: {
    // Estilos para los puntos inactivos si es necesario.
  },
});
