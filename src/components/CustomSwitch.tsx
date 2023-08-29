import { View, Text, Switch, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    isOn: boolean;
    onChange: (value:boolean) => void;
}


export const CustomSwitch = ({isOn, onChange}: Props) => {
    
    const { theme: { currentTheme, colors } } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: colors.text, true: colors.border }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch