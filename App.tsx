import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './screens/RootNavigationTyes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

const App = () => (
  <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator
        id="root"
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          contentStyle: {
            backgroundColor: '#3f2f2f',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="MealsCategories"
          component={DrawerNavigator}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
export default App;
