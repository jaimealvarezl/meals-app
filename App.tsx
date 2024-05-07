import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
const App = () => (
  <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator id="root" initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
export default App;

const styles = StyleSheet.create({
  container: {},
});
