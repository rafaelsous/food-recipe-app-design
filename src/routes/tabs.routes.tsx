import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Home} />
      <Screen name="Bookmark" component={Home} />
      <Screen name="Settings" component={Home} />
    </Navigator>
  );
};

export {
  TabNavigation
};
