import { View, Text, TouchableOpacity, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

  const { height, width } = Dimensions.get('screen');
  const [isVisible, setIsVisible] = useState(false);

  const activeModal = () => {
    setIsVisible(!isVisible);
    console.log('desde function');
  }

  return (
    <View
      style={styles.globalMargin}
    >
      <HeaderTitle title='Modal' />
      <TouchableOpacity
        style={{ backgroundColor: '#ea004c', borderRadius: 10, marginHorizontal: (width / 4), padding: 4 }}
        onPress={activeModal}
      >
        <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Abrir Modal</Text>
      </TouchableOpacity>

      {
        (isVisible) && (
          <Modal
            animationType='fade'
            visible={isVisible}
            transparent
          >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#a396c5', width: 300, height: 200 }}>

                <Text style= {{ textAlign: 'center', marginVertical: 50 }}>¿Estas seguro en realizar esta acción?</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>

                  <TouchableOpacity
                    style={{ backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 30 }}
                  >
                    <Text>Confirmar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={activeModal}
                    style={{ backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 30 }}
                  >
                    <Text>Cancelar</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </Modal>
        )
      }
    </View>
  )
}
