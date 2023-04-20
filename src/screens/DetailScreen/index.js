import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import colors from '../../lib/constants/colors';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';
import Timeline from 'react-native-timeline-flatlist'
import { IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const DetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { recipe } = route.params;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: recipe.image }}
                style={styles.image}
                resizeMode='cover'
            />
            <IconButton style={styles.backButton} icon={props => <Icon name="arrow-left-thin" size={30} color={colors.white} onPress={() => { navigation.goBack() }} />} />
            <View style={styles.content}>

                <Text style={styles.title}>{recipe.title}</Text>
                <View style={aboutStyles.timeContainer}>
                    <View style={aboutStyles.timeView}>
                        <Text style={aboutStyles.time}>
                            <Icon name="clock-time-five-outline" size={14} color="black" />
                            Total time {recipe.readyInMinutes}m</Text>
                    </View>
                    <View style={aboutStyles.timeView}>
                        <Text style={aboutStyles.time}>
                            <Icon name="cards-heart-outline" size={14} color="black" />
                            Health Score {recipe.healthScore}</Text>
                    </View>
                    <View style={aboutStyles.timeView}>
                        <Text style={aboutStyles.time}>
                            <Icon name="cash" size={14} color="black" />
                            Price ${recipe.pricePerServing}</Text>
                    </View>
                </View>
                <Tab.Navigator
                    style={{ marginTop: -10 }}
                    tabBarOptions={{
                        pressColor: 'transparent',
                        pressOpacity: 0,
                        allowFontScaling: false,
                        labelStyle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
                        tabStyle: { width: 120, borderRadius: 50, overflow: 'hidden' },
                        style: { backgroundColor: 'transparent', elevation: 0 },
                        indicatorStyle: {
                            backgroundColor: colors.primary, height: '70%', borderRadius: 50
                        },
                    }}
                    sceneContainerStyle={{ flex: 1 }}>
                    <Tab.Screen name="About" component={AboutScreen} initialParams={{ data: recipe }} />
                    <Tab.Screen name="Ingredients" component={IngredientsScreen} initialParams={{ data: recipe.extendedIngredients }} />
                    <Tab.Screen name="Steps" component={StepsScreen} initialParams={{ data: recipe.analyzedInstructions[0].steps }} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
        width: 35,
        height: 35,
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    image: {
        width: '100%',
        height: '30%',
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -40,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    about: {
        fontSize: 12,
        lineHeight: 18,
    },

});

export default DetailScreen;


const AboutScreen = ({ route }) => {
    const { data } = route.params;
    return (
        <>
            <View style={aboutStyles.content}>

                <ScrollView>
                    <Text style={aboutStyles.aboutTitle}>About Recipe</Text>
                    <Text style={aboutStyles.about} >
                        {data.summary}
                    </Text>
                </ScrollView >
            </View>
        </>
    )
};

const aboutStyles = StyleSheet.create({
   
    content: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    time: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    timeView: {
        backgroundColor: colors.white,
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 30,
        width: 120,
        elevation: 3,
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


const IngredientsScreen = ({ route }) => {
    const { data } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: colors.white, padding: 10 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View key={item.id} style={IngredientStyles.item}>
                        <Icon name="circle-medium" size={15} color="#333" style={IngredientStyles.icon} />
                        <Text style={IngredientStyles.text}>{item.original}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const IngredientStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 30
    },
});


const StepsScreen = ({ route }) => {
    const { data } = route.params;

    const timelineData = data.map(step => {
        return {
            time: `Step ${step.number}`,
            title: step.step,

        };
    });
    return (
        <View style={{ flex: 1, backgroundColor: colors.white, padding: 10 }}>
            <Timeline
                data={timelineData}
                lineColor={colors.primary}
            // style={{ flex: 1,marginLeft:-50}}
            />
        </View>
    );
}
