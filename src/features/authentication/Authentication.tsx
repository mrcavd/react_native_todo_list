import React from "react";
import { Text, View } from "react-native";
import { AUTH_STYLE, TEXTSTYLES } from "../../constants";
import { localAuthInit } from "../../helpers";
import ActionButton from "../universal/ActionButton";

interface AuthenticationProps {
    authCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authentication: React.FC<AuthenticationProps> = ({ authCallback }) => {
    const authenticationOnPress = async () => {
        await localAuthInit(authCallback);
    };

    return (
        <View style={AUTH_STYLE.container}>
            <Text style={TEXTSTYLES.Headline.h3}>Authentication Home</Text>
            <ActionButton
                label="Authenticate"
                onPress={authenticationOnPress}
            />
        </View>
    );
};

export default Authentication;
