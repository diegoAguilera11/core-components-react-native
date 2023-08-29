import { View, Text, StyleSheet, TextInput as TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react'
import { HeaderTitle } from '../components/HeaderTitle';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  });

  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.globalMargin}>
          <HeaderTitle title='Text Input' />

          <Text style={{ ...stylesInput.text, color: colors.text }}>React Native Paper</Text>
          <TextInputPaper
            label="Email"
            keyboardType='email-address'
            onChangeText={(value) => onChange(value, 'email')}
            style={{ marginVertical: 20 }}
            textColor={colors.text}
          />

          <TextInputPaper
            label="Nombre"
            autoCapitalize='words'
            onChangeText={(value) => onChange(value, 'name')}
            style={{ marginVertical: 20 }}
            textColor={colors.text}
          />

          <TextInputPaper
            label="Número de teléfono"
            keyboardType='phone-pad'
            onChangeText={(value) => onChange(value, 'phone')}
            style={{ marginVertical: 20 }}
            textColor={colors.text}
          />
          <Text style={{ ...stylesInput.text, color: colors.text }}>React Native</Text>
          <TextInput
            style={{...stylesInput.input, color: colors.text}}
            keyboardType='email-address'
            onChangeText={(value) => onChange(value, 'email')}
            placeholder='example@correo.com'
          />

          <View style={stylesInput.switchBox}>
            <Text style={{ color: colors.text, fontSize: 20 }}>Subscribirse</Text>
            <CustomSwitch
              isOn={true}
              onChange={(value) => onChange(value, 'isSubscribed')}
            />
          </View>



          <Text style={{ color: colors.text, fontSize: 25, fontWeight: 'bold', marginVertical: 30 }}>
            {
              JSON.stringify(form, null, 5)
            }
          </Text>

        </View>
      </KeyboardAvoidingView>

    </>
  )
}

const stylesInput = StyleSheet.create({
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
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#e7e0ec',
    borderBottomWidth: 2,
    borderBottomColor: '#6750a4'
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginVertical: 10
  }
});
