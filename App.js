import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import colors from './src/lib/constants/colors';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackNavigation } from './src/screens/HomeScreen';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from '@expo/vector-icons';
import { RecipeStackNavigation } from './src/screens/RecipesScreen';
import { CategoryStackNavigation } from './src/screens/CategoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();


function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      inactiveColor={colors.black}
      activeColor={colors.primary}
      barStyle={{ backgroundColor: colors.white, elevation: 20, shadowOpacity: 0.9, shadowRadius: 10, shadowOffset: { height: 0, width: 0 } }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={25} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CategoryTab"
        component={CategoryStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="boxes" size={24} color={color} />
          ),
          tabBarLabel: 'Categories',
        }}
      />
      <Tab.Screen
        name="RecipeTab"
        component={RecipeStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={25} />
          ),
          tabBarLabel: 'Recipes',
        }}
      />
      <Tab.Screen name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-settings" color={color} size={25} />
          ),
          tabBarLabel: 'setttings',
        }} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar backgroundColor='transparent' />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppTabs />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}


