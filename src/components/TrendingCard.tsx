import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';

import { RecipeCardInfo } from '../components';

import { COLORS, FONTS, images, SIZES } from '../constants';

type RecipeItem = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  duration: string;
  serving: number;
  category: string;
  isBookmark: boolean;
};

type TrendingCardProps = {
  index: number;
  recipeItem: RecipeItem;
  onPress: () => void;
};

const TrendingCard = ({ index, recipeItem, onPress }: TrendingCardProps) => (
  <TouchableOpacity
    style={[styles.container, { marginLeft: index === 0 ? SIZES.padding : 0 }]}
    activeOpacity={0.8}
    onPress={onPress}
  >
    <Image style={styles.image} source={recipeItem.image} />

    <View style={styles.categoryContainer}>
      <Text style={styles.category}>{recipeItem.category}</Text>
    </View>

    <RecipeCardInfo
      recipeItem={recipeItem}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 350,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: SIZES.radius,
  },
  categoryContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    backgroundColor: COLORS.lightGreen1,
    borderRadius: SIZES.radius,
  },
  category: {
    ...FONTS.h4,
    color: COLORS.white,
  },
});

export default TrendingCard;
