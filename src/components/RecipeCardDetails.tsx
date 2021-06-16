import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

import { COLORS, FONTS, icons, SIZES } from '../constants';

type RecipeItem = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  duration: string;
  serving: number;
  category: string;
  isBookmark: boolean;
};

type RecipeCardDetailProps = {
  recipeItem: RecipeItem;
};

const RecipeCardDetails = ({ recipeItem }: RecipeCardDetailProps) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{recipeItem.name}</Text>
      <Image style={styles.icon} source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark} />
    </View>

    <Text style={styles.detailText}>
      {recipeItem.duration} | {recipeItem.serving} Serving
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.base / 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    width: '70%',
    ...FONTS.h3,
    fontSize: 18,
    color: COLORS.white,
  },
  icon: {
    width: 20,
    height: 20,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailText: {
    marginTop: SIZES.radius,
    ...FONTS.body4,
    color: COLORS.gray,
  },
});

export default RecipeCardDetails;
