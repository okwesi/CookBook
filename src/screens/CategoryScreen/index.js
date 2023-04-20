import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from '../../lib/constants/colors';
import catgories from '../../data/categories.json';
import CategoryCard from '../../lib/components/CategoryCard';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../lib/components/AppHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export const CategoryStackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" options={{ headerShown: false }} component={CategoryScreen} />
            <Stack.Screen name="CategoryDetail" options={{ headerShown: false }} component={CategoryDetailScreen} />
        </Stack.Navigator>
    );
};


const CategoryScreen = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const navigation = useNavigation();
    React.useEffect(() => {
        setData(catgories.categories);
    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <AppHeader
                    title=<Text style={{ fontSize: 20 }}>CookBook</Text>
                    leading=<IconButton icon={props => <Icon name="arrow-left-thin" size={35} />} onPress={() => { navigation.goBack() }} />
                    trailing=<MaterialCommunityIcons name="chef-hat" size={25} color="black" />
                />
                {data.length > 0 ? (
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <CategoryCard
                                item={item}
                            />
                        )}
                        keyExtractor={(item) => item.idCategory}
                    />
                ) : (
                    <View style={[styles.activityIndicator, styles.horizontal]}>
                        <ActivityIndicator size="large" color={colors.black} />
                    </View>
                )}

            </SafeAreaView>
        </>
    );
}

export default CategoryScreen;




const CategoryDetailScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Category Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollConntainer: {
        backgroundColor: colors.white,
        paddingTop: 20,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
