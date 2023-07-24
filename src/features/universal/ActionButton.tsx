import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewProps } from "react-native";
import { TouchableOpacityOnPress } from "../../types";
import { BUTTON_STYLE } from "../../constants";

interface ConfirmButtonProps {
    label: string;
    onPress: TouchableOpacityOnPress;
    buttonStyle?: ViewProps["style"];
    textStyle?: TextStyle;
    testID?: string;
}

const ActionButton: React.FC<ConfirmButtonProps> = ({
    label,
    onPress,
    buttonStyle,
    textStyle,
    testID,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle || BUTTON_STYLE.actionButtonContainer}
            testID={testID}
        >
            <Text style={textStyle || BUTTON_STYLE.actionButtonLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default ActionButton;
