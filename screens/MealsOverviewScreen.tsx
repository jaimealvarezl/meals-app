import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from './RootNavigationTyes';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

type MealsOverviewScreenProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen = ({ route, navigation }: MealsOverviewScreenProps) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = useMemo(() => {
    return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  }, [categoryId]);

  useLayoutEffect(() => {
    const category = CATEGORIES.find((c) => c.id === categoryId);
    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => (
    <MealItem
      imageUrl={item.imageUrl}
      title={item.title}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
