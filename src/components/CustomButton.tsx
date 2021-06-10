import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTS } from '../constants';

interface ICustomButtonProps {
  title: string;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  colors?: string[];
  onPress?: () => void;
}

const CustomButton = ({
  title,
  buttonContainerStyle,
  colors,
  onPress,
}: ICustomButtonProps) => (
  !!colors ? (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={buttonContainerStyle}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity 
      style={buttonContainerStyle}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
);

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    color: COLORS.lightGreen,
    ...FONTS.h3,
  },
});

export default CustomButton;
