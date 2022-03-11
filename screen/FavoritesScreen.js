import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
// import {MEALS} from '../data/dummy-data';

const FavoritesScreen = ({route, navigation}) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  // console.log('navigation ', props);
  // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  // above line was to render some dummy meals not the actual data we want to obtain

  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
