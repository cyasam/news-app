import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { enableScreens } from 'react-native-screens';

import HomeScreen from './pages/HomeScreen';
import CategoriesScreen from './pages/CategoriesScreen';
import InternetConnection from './components/InternetConnection';

enableScreens();

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.statusBar} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = 'ios-home';
            } else if (route.name === 'Categories') {
              iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          indicatorStyle: {
            height: 2,
            backgroundColor: '#fff',
          },
          style: {
            backgroundColor: '#C2185B',
          },
        }}
      >
        <Tab.Screen name="Discover" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    position: 'absolute',
    height: Constants.statusBarHeight,
  },
});

export default InternetConnection(Navigation);
