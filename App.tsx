import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './screens/RootNavigationTyes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => (
  <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator
        id="root"
        initialRouteName="Categories"
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
          name="Categories"
          options={{
            title: 'All Categories',
          }}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const { categoryId } = route.params;
          //   return {
          //     title: categoryId,
          //   };
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
export default App;

const styles = StyleSheet.create({
  container: {},
});
