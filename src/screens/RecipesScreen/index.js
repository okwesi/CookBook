import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import RecipeDetailScreen from '../RecipeDetailScreen';
import colors from '../../lib/constants/colors';
import recipes from '../../data/recipes.json';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Avatar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppHeader
    from '../../lib/components/AppHeader';
const Stack = createNativeStackNavigator();

export const RecipeStackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Recipe" options={{ headerShown: false }} component={RecipeScreen} />
            <Stack.Screen name="RecipeDetail" options={{ headerShown: false }} component={RecipeDetailScreen} />
        </Stack.Navigator>
    );
};


const RecipeScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        setData(recipes.recipes);
    }, []);
    // const value = 'lamb'
    // const filteredData = recipes.recipes.filter(item => item.dishTypes.includes(value) || item.title.includes(value));
    // console.log(filteredData[0].title);

    return (
        <>
            <AppHeader
                title=<Text style={{ fontSize: 20 }}>CookBook</Text>
                leading=<IconButton icon={props => <Icon name="arrow-left-thin" size={35} />} onPress={() => { navigation.goBack() }} />
                trailing=<MaterialCommunityIcons name="chef-hat" size={25} color="black" />

            />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {
                    data ?
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <FeaturedCared item={item} />}
                            keyExtractor={(item) => item.title}
                            numColumns={2}
                            contentContainerStyle={styles.listContainer}
                        />

                        : null
                }
            </View>
        </>
    );
}

export default RecipeScreen;

const FeaturedCared = ({ item }) => {
    const { title, image, readyInMinutes } = item;
    const navigation = useNavigation();
    return (
        <>
            <Pressable style={styles.item} onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
                <View >
                    <ImageBackground
                        source={{ uri: image }}
                        imageStyle={{ borderRadius: 20 }}
                        style={styles.imageBackground}
                    >
                        <View style={styles.overlay}>
                            <Text style={styles.title} numberOfLines={2}>{title}</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.timeContainer}>
                        <View style={styles.timeView}>
                            <Text style={styles.time}>
                                <Icon name="clock-time-five-outline" size={16} color="black" />
                                Total time {readyInMinutes}m</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </>
    );
};


const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        marginVertical: 8,
    },
    item: {
        borderRadius: 8,
        marginHorizontal: 8,
        width: '45%',
    },
    imageBackground: {
        width: '100%',
        height: 280,
        resizeMode: 'cover',
        borderRadius: 30,
        marginHorizontal: 8,
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    overlay: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 20,
    },
    title: {
        // fontSize: 12,
        color: colors.white,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    time: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    timeView: {
        position: 'absolute',
        bottom: -5,
        right: 10,
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 30,
        width: 150,
        elevation: 5,
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
});