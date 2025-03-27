import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import JokeOne from './screens/JokeOne';
import JokeTwo from './screens/JokeTwo';
import JokeThree from './screens/JokeThree';
import JokeFour from './screens/JokeFour';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="JokeOne" component={JokeOne} />
        <Stack.Screen name="JokeTwo" component={JokeTwo} />
        <Stack.Screen name="JokeThree" component={JokeThree} />
        <Stack.Screen name="JokeFour" component={JokeFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
