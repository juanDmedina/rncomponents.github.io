import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext';
import SofkaHomePage from '../components/pages/SofkaHomePage';
import { SofkaAnimationsPage } from '../components/pages/SofkaAnimationsPage';
import { SofkaSwitchPage } from '../components/pages/SofkaSwitchPage';
import { SofkaAlertsPage } from '../components/pages/SofkaAlertsPage';
import { SofkaTextInputPage } from '../components/pages/SofkaTextInputPage';
import { SofkaPullToRefreshPage } from '../components/pages/SofkaPullToRefreshPage';
import { SofkaSectionListPage } from '../components/pages/SofkaSectionListPage';
import { SofkaModalPage } from '../components/pages/SofkaModalPage';
import { SofkaFlatListPage } from '../components/pages/SofkaFlatListPage';
import { SofkaCarouselPage } from '../components/pages/SofkaCarouselPage';
import SofkaCardPage from '../components/pages/SofkaCardPage';
import SofkaLayoutPage from '../components/pages/SofkaLayoutPage';
import { SofkaThemePage } from '../components/pages/SofkaThemePage';



const Stack = createStackNavigator();

const Navigator = () => {

  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer theme={ theme }>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
          <Stack.Screen name="SofkaHomePage" component={ SofkaHomePage } />
          <Stack.Screen name="SofkaAnimationsPage" component={ SofkaAnimationsPage } />
          <Stack.Screen name="SofkaSwitchPage" component={ SofkaSwitchPage } />
          <Stack.Screen name="SofkaAlertsPage" component={ SofkaAlertsPage } />
          <Stack.Screen name="SofkaTextInputPage" component={ SofkaTextInputPage } />
          <Stack.Screen name="SofkaPullToRefreshPage" component={ SofkaPullToRefreshPage } />
          <Stack.Screen name="SofkaSectionListPage" component={ SofkaSectionListPage } />
          <Stack.Screen name="SofkaModalPage" component={ SofkaModalPage } />
          <Stack.Screen name="SofkaFlatListPage" component={ SofkaFlatListPage } />
          <Stack.Screen name="SofkaCarouselPage" component={ SofkaCarouselPage } />
          <Stack.Screen name="SofkaCardPage" component={ SofkaCardPage } />
          <Stack.Screen name="SofkaLayoutPage" component={ SofkaLayoutPage } />
          <Stack.Screen name="SofkaThemePage" component={ SofkaThemePage } />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
};

export default Navigator;
