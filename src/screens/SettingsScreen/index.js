import React from 'react';
import { View, Text, Image } from 'react-native';
import AppHeader from '../../lib/components/AppHeader';
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../lib/constants/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const SettingsScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <AppHeader
                title=<Text style={{ fontSize: 20 }}>CookBook</Text>
                leading=<IconButton icon={props => <Icon name="arrow-left-thin" size={35} />} onPress={() => { navigation.goBack() }} />
                trailing=<MaterialCommunityIcons name="chef-hat" size={25} color="black" />
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white }}>
                <Image source={require('../../assets/comingSoon.jpeg')} style={{ width: 500, height: 300 }} />
            </View>
        </>
    );
}

export default SettingsScreen;