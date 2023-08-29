import 'react-native-gesture-handler';
import React, {ReactNode} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


interface Props {
  children: ReactNode;
}

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     dark: true,
//     colors: {
//       ...DefaultTheme.colors,
//       // primary: '',
//       // background: '#000',
//       // card: '',
//       // text: '',
//       // border: '',
//       // notification: '',
//     }
//   }
// }

const AppState: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}



const App = () => {
  return (
    <AppState>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
    </AppState>
  )
}

export default App;