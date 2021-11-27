import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Films from '../../screens/films/Films';
import Serials from '../../screens/serial/Serials';

const FilmsNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName={'Films'}>
        <Stack.Screen name= "Films" component = { Films } />
        <Stack.Screen name= "Films1" component = { Serials } />
      </Stack.Navigator>
    )
}

export default FilmsNavigation;