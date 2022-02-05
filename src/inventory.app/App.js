import React from 'react'

import HomeScreen from './Screens/home-screen.js'
import ProfileScreen from './Screens/profile-screen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inventaires' }}
        />
        <Stack.Screen name="Inventaire" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   )
}
export default App
