import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useLayoutEffect, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootStackParamList } from './RootNavigationTyes';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { RootState, useAppDispatch } from '../store/redux/store';

type MealDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

const MealDetailsScreen = ({ route, navigation }: MealDetailsScreenProps) => {
  const mealId = route.params.mealId;
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();

  const selectedMeal = useMemo(() => MEALS.find((meal) => mealId === meal.id), [mealId]);
  const mealIsFavorite = useMemo(() => favoriteMealIds.includes(mealId), [favoriteMealIds, mealId]);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  }, [dispatch, mealId, mealIsFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [changeFavoriteStatusHandler, mealIsFavorite, navigation]);

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>This is the meal detail screen {mealId}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
