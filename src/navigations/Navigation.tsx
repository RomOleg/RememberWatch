import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BooksNavigation from './books/BooksNavigation';
import FilmsNavigation from './films/FilmsNavigation';
import SerialsNavigation from './serials/SerialsNavigation';
import { Text } from 'react-native';

const Navigation = () => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => {
            return null
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {fontSize: 20, paddingBottom: 10}
        })}
      >
        <Tab.Screen name="Serials" component={SerialsNavigation} options={{ headerShown: false }} />
        <Tab.Screen name="Films" component={FilmsNavigation} options={{ headerShown: false }} />
        <Tab.Screen name="Books" component={BooksNavigation} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;