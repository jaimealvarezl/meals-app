import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './screens/RootNavigationTyes';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        sceneContainerStyle: {
          backgroundColor: '#3f2f2f',
        },
        headerTintColor: 'white',
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        options={{
          title: 'All Categories',
          drawerIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ size, color }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => (
  <>
    <StatusBar style="light" />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          id="root"
          initialRouteName="Drawer"
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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailsScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </>
);

export default App;
