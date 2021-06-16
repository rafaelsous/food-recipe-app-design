import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { TrendingCard } from '../components';

import { COLORS, dummyData, FONTS, SIZES } from '../constants';


const TrendingSection = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending Recipe</Text>

      <FlatList
        style={{ backgroundColor: COLORS.transparent }}
        data={dummyData.trendingRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item, index}) => (
          <TrendingCard
            index={index}
            recipeItem={item}
            onPress={() => navigate("Recipe", { recipe: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  header: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
});

export default TrendingSection;
