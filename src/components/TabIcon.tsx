import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

import { COLORS } from '../constants';

type TabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
};

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View style={styles.iconContainer}>
    <Image
      source={icon}
      resizeMode="contain"
      style={[
        {
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        },
        styles.icon,
      ]}
    />

    {focused && <View style={styles.selectedIconBar}></View>}
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  selectedIconBar: {
    position: 'absolute',
    bottom: 0,
    width: 50,
    height: 5,
    backgroundColor: COLORS.darkGreen,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default TabIcon;
