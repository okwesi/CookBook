import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import colors from '../../constants/colors';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import categories from '../../../data/categories.json';


const CategoryCard = ({ title, image }) => {

    return (
    <View style={styles.item}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
    );
};

const Category = () => {
    const navigation = useNavigation();


    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData(categories.categories.slice(0,5));
    }, []);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Text>Categories</Text>
                <Button
                    variant="text"
                    title="See All"
                    color={colors.black}
                    uppercase={false}
                    onPress={() => navigation.navigate('CategoryTab')}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginTop: -10 }}>
                {data ? (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <CategoryCard title={item.strCategory} image={item.strCategoryThumb} />}
                        keyExtractor={(item) => item.idCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                ) : null}
            </View>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    item: {
        borderRadius: 8,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 16,
        color: colors.black,
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 8,
    },
});