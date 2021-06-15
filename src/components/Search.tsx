import React from 'react';
import { Image, TextInput, View, StyleSheet } from 'react-native';

import { FONTS, COLORS, SIZES, icons } from '../constants';

const Search = () => (
  <View style={styles.searchContainer}>
    <Image source={icons.search} style={styles.searchIcon} />

    <TextInput
      style={styles.searchInputText}
      placeholderTextColor={COLORS.gray}
      placeholder="Search Recipes"
    />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: SIZES.padding,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  searchInputText: {
    width: '94%',
    marginHorizontal: SIZES.radius,
    ...FONTS.body3,
  },
});

export default Search;
