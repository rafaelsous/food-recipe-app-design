import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import { Home } from '../screens';
import { TabIcon } from '../components';

import { COLORS, icons } from '../constants';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: { ...styles.icon },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    height: 100,
    right: 0,
    bottom: 0,
    left: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderTopColor: 'transparent',
  },
});

export { TabNavigation };
