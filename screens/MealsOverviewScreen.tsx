import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect, useMemo } from 'react';

import { RootStackParamList } from './RootNavigationTyes';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
