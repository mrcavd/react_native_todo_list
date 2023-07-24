import React from "react";
import { Text, View } from "react-native";
import { TODO_STYLE } from "../../../constants";

const TodoHeader = () => {
    return (
        <View style={TODO_STYLE.header}>
            <Text style={TODO_STYLE.headerText}>TODO:</Text>
        </View>
    );
};

export default TodoHeader;
