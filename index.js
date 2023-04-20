import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import colors from './src/lib/constants/colors';
const Stack = createNativeStackNavigator();


function SettingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}
const RootStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
        </Stack.Navigator>
    );
};

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}


export default function App() {
    return (
        <>
            <StatusBar backgroundColor='transparent' />
            <SafeAreaView style={{ flex: 1 }}>
            </SafeAreaView>
        </>
    );
}


