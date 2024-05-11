import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { FlatList, StyleSheet, View } from 'react-native';

import Meal from '../../models/meal';
import MealItem from '../MealItem';

type MealsListProps = {
  items: Meal[];
};

const MealsList = ({ items }: MealsListProps) => {
  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => (
    <MealItem
      id={item.id}
      imageUrl={item.imageUrl}
      title={item.title}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
