import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { images, COLORS, SIZES, FONTS } from '../constants';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Hello, Rafael!</Text>
        <Text style={styles.headerSubtitle}>What you want to cook today?</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => console.log('Profile')}
      >
        <Image source={images.profile} style={styles.headerImage} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginHorizontal: SIZES.padding,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.darkGreen,
  },
  headerSubtitle: {
    marginTop: 3,
    ...FONTS.body3,
    color: COLORS.gray,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;
