import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS, images, SIZES } from '../constants';

const RecipeCard = () => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <Image style={styles.image} source={images.recipe} resizeMode="contain" />
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.message}>
        You have 12 recipe that you haven't tried yet
      </Text>

      <TouchableOpacity
        style={styles.link}
        onPress={() => console.log('See Recipe')}
        activeOpacity={0.8}
      >
        <Text style={styles.linkText}>See Recipes</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  contentContainer: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: SIZES.radius,
  },
  message: {
    width: '70%',
    ...FONTS.body4,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    ...FONTS.h4,
    color: COLORS.darkGreen,
    textDecorationLine: 'underline',
  },
});

export default RecipeCard;
