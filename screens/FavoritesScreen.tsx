import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { RootState } from '../store/redux/store';

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids);

  const favoriteMeals = useMemo(
    () => MEALS.filter((meal) => favoriteMealIds.includes(meal.id)),
    [favoriteMealIds],
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
