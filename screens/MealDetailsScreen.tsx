import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect, useMemo } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from './RootNavigationTyes';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

type MealDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

const MealDetailsScreen = ({ route, navigation }: MealDetailsScreenProps) => {
  const mealId = route.params.mealId;

  const selectedMeal = useMemo(() => {
    return MEALS.find((meal) => mealId === meal.id);
  }, [mealId]);

  const headerButtonPressHandler = () => {
    // navigation.navigate('Categories');
    console.log('Pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Tap me" onPress={headerButtonPressHandler} />,
    });
  }, [navigation]);

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
