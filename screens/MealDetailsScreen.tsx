import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { RootStackParamList } from './RootNavigationTyes';

type MealDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

const MealDetailsScreen = ({ route }: MealDetailsScreenProps) => {
  const mealId = route.params.mealId;
  return <Text>This is the meal detail screen {mealId}</Text>;
};

export default MealDetailsScreen;
