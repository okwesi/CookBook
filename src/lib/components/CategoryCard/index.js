import { ScrollView, StyleSheet, View, Text, Image, Touchable, Pressable, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';



const CategoryCard = ({
    item
}) => {
    const navigation = useNavigation()


    return (
        <Pressable
            onPress={() => [
                navigation.navigate('Details', {
                    item: item
                })
            ]}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.strCategoryThumb }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title} numberOfLines={1}>{item.strCategory}</Text>
                    <Text style={styles.description} numberOfLines={3}>{item.strCategoryDescription}</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </View>
        </Pressable>
    );
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 5,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    contentContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
    },
    description: {
        fontSize: 14,
        color: colors.black,
    },
    source: {
        fontSize: 12,
        color: colors.black,
    },
    publishedAt: {
        fontSize: 12,
        color: colors.black,
    },
});
