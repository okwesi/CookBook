import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import colors from '../../constants/colors';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import recipes from '../../../data/recipes';

const FeaturedCared = ({item}) => {
    const { title, image, readyInMinutes } = item;
    const navigation = useNavigation();
    return (
        <>
            <Pressable style={styles.item} onPress={() => navigation.navigate('HomeDetails', { recipe: item })}>
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

const FeaturedRecipes = () => {
    const navigation = useNavigation();
    const url =
        'https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=04e70ac7&app_key=9063939082e79d76f952777a180f9c48&diet=balanced&cuisineType=American&mealType=Lunch&dishType=Main%20course&time=30%2B&imageSize=LARGE';
    const [data, setData] = React.useState([]);


    const verticalData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: `Item will be cool a ${index + 1}`,
        image: `https://picsum.photos/id/${index + 100}/200/200`,
        time: '30 min',
    }));


    React.useEffect(() => {
        setData(recipes.recipes.slice(0, 20));
    }, []);

    const verticalItem = ({ item }) => (
        <FeaturedCared title={item.title} image={item.image} time={item.time} />
    );

    return (
        <View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Text>Featured Recipe</Text>
                <Button
                    variant="text"
                    title="See All"
                    color={colors.black}
                    uppercase={false}
                    onPress={() => navigation.navigate('RecipeTab')}
                />
            </View>
            <View style={{ flexGrow: 1, marginTop: -20 }}>
                {
                    data ?
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <FeaturedCared item={item} />}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            contentContainerStyle={styles.listContainer}
                        />

                        : null
                }
            </View>
        </View>
    );
};

export default FeaturedRecipes;

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