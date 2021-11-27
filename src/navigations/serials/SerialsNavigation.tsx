import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Serials from '../../screens/serial/Serials';

const SerialsNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name= "Serials" component = { Serials } />
      </Stack.Navigator>
    )
}

export default SerialsNavigation;