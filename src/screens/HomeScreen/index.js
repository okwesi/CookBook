import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, IconButton, TextInput } from "@react-native-material/core";
import colors from '../../lib/constants/colors';
import AppHeader from '../../lib/components/AppHeader';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CateogryCard from '../../lib/components/HomeCategory';
import Category from '../../lib/components/HomeCategory';
import FeaturedRecipes from '../../lib/components/HomeFeaturedRecipes';
import { AppTabs } from '../../..';
import DetailsScreen from '../DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export const HomeStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="HomeDetails" options={{ headerShown: false }} component={DetailsScreen} />
        </Stack.Navigator>
    );
};


const HomeScreen = () => {

    return (
        <>

            <AppHeader
                title=<Text style={{ fontSize: 20 }}>CookBook</Text>
                leading=<IconButton icon={props => <Icon name="menu" size={35} />} />
                trailing=<MaterialCommunityIcons name="chef-hat" size={25} color="black" />
            />
            <ScrollView style={styles.container}>
            <View style={styles.container}>
                    <TextInput
                        variant="outlined"
                        color={colors.black}
                        label="Search your recipes"
                        leading=<Icon name="magnify" size={30} />
                        style={styles.searchInput}
                    />
                </View>
                <View>
                    <Category />
                    <FeaturedRecipes />
                </View>
            </ScrollView>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    searchInput: {
        margin: 10,
        backgroundColor: colors.white,

    },
    listContainer: {
        flexGrow: 1,
    },
});