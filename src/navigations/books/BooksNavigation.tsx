import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from '../../screens/books/Books';

const BooksNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name= "Books" component = { Books } initialParams={Books} />
      </Stack.Navigator>
    )
}

export default BooksNavigation;