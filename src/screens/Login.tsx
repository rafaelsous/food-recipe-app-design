import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { images, COLORS, FONTS, SIZES } from '../constants';

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CustomButton } from '../components';

const Login = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={images.loginBackground}
          resizeMode="cover"
        >
          <LinearGradient
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
          >
            <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    
      <View style={styles.detailContainer}>
        <Text style={styles.description}>
          Discover more than 1200 food recipes in your hand and cooking it easily!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          buttonContainerStyle={styles.button}
          title="Login"
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => navigate("Home")}
        />

        <CustomButton
          buttonContainerStyle={[styles.button, styles.secondaryButton]}
          title="Sign Up"
          onPress={() => navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  backgroundImageContainer: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  title: {
    width: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  description: {
    width: '70%',
    marginTop: SIZES.radius,
    ...FONTS.body3,
    color: COLORS.gray,
  },
  buttonContainer: {
    flex: 1,
    marginBottom: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.black,
  },
  button: {
    paddingVertical: SIZES.padding * 0.85,
    borderRadius: 24,
  },
  secondaryButton: {
    marginTop: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.darkLime,
  },
});

export default Login;
