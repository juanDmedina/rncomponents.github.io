import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ThemeProvider} from './src/context/themeContext';
import Navigator from './src/navigators/Navigator';
import { ApplicationProvider } from '@ui-kitten/components';


const ThemeState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <>
      <ThemeState>
      <ApplicationProvider {...eva} theme={eva.light}>
          <Navigator />
      </ApplicationProvider>
      </ThemeState>
    </>
  );
};

export default App;
