import {} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { RootStackParamList } from './RootNavigationTyes';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        onPress={pressHandler}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default CategoriesScreen;
