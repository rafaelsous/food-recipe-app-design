import React from 'react';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

type CategoryProps = {
  name: string;
  image: ImageSourcePropType;
  duration: string;
  serving: string;
};

type CategoryCardProps = {
  category: CategoryProps;
  onPress: () => void;
};

const CategoryCard = ({ category, onPress }: CategoryCardProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.container}
    onPress={onPress}
  >
    <Image source={category.image} resizeMode="cover" style={styles.categoryImage} />

    <View style={styles.categoryDetailContainer}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.categoryServing}>
        {category.duration} | {category.serving} Serving
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryDetailContainer: {
    width: '65%',
    paddingHorizontal: 20,
  },
  categoryName: {
    flex: 1,
    ...FONTS.h2,
  },
  categoryServing: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
});

export default CategoryCard;
