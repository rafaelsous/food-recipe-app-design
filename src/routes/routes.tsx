import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Recipe } from '../screens';
import { TabNavigation } from '../routes';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Login'}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={TabNavigation} />
      <Screen name="Recipe" component={Recipe} />
    </Navigator>
  </NavigationContainer>
);

export { 
  Routes
};
