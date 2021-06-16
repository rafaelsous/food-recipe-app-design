import React from 'react';
import { View, StyleSheet, Platform, ImageSourcePropType } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { RecipeCardDetails } from '../components';

import { COLORS, SIZES } from '../constants';

type RecipeItem = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  duration: string;
  serving: number;
  category: string;
  isBookmark: boolean;
};

type RecipeCardInfoProps = {
  recipeItem: RecipeItem;
};

const RecipeCardInfo = ({ recipeItem }: RecipeCardInfoProps) =>
  Platform.OS === 'ios' ? (
    <BlurView style={styles.container} blurType="light">
      <RecipeCardDetails recipeItem={recipeItem} />
    </BlurView>
  ) : (
    <View
      style={[styles.container, { backgroundColor: COLORS.transparentDarkGray }]}
    >
      <RecipeCardDetails recipeItem={recipeItem} />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    left: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.base,
  },
});

export default RecipeCardInfo;
