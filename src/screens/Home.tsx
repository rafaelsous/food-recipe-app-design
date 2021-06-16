import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {
  CategoryCard,
  Header,
  RecipeCard,
  Search,
  TrendingSection,
} from '../components';

import { COLORS, dummyData, FONTS, SIZES } from '../constants';

type CategoryProps = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  duration: string;
  serving: string;
};

const Home = () => {
  const { navigate } = useNavigation();

  function onNavigateToRecipe(item: CategoryProps) {
    navigate('Recipe', { recipe: item });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item: CategoryProps) => `${item.id}`}
        data={dummyData.categories}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header />
            <Search />
            <RecipeCard />
            <TrendingSection />

            <View style={styles.categoryHeader}>
              <Text style={styles.categoryHeaderText}>Categories</Text>

              <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                <Text style={styles.linkText}>View All</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => onNavigateToRecipe(item)}
          />
        )}
        ListFooterComponent={<View style={styles.footerComponent}></View>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: SIZES.padding,
  },
  categoryHeaderText: {
    flex: 1,
    ...FONTS.h2,
  },
  link: {

  },
  linkText: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  footerComponent: {
    marginBottom: 100,
  },
});

export default Home;
