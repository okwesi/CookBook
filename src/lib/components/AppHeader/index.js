import React from "react";
import { AppBar } from "@react-native-material/core";
import { Text } from "react-native";
import colors from "../../constants/colors";


const AppHeader = ({ title, leading, trailing }) => {

    return (
        <AppBar
            title={title}
            leading={props => (
                leading
            )}
            color={colors.white}
            centerTitle={true}
            trailing={props => (
                trailing
            )}
            elevation={0}
        />
    );
};

export default AppHeader;