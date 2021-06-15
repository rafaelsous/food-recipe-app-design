import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { CategoryCard, Header, RecipeCard, Search } from '../components';
import { COLORS, dummyData } from '../constants';

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
  categoryCardContainer: {},
  footerComponent: {
    marginBottom: 100,
  },
});

export default Home;
