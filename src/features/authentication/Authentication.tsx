import React, { useState } from "react";
import { Linking, Text, View } from "react-native";
import { AUTH_STYLE, TEXTSTYLES } from "../../constants";
import { localAuthInit } from "../../helpers";
import ActionButton from "../universal/ActionButton";

interface AuthenticationProps {
    authCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const Authentication: React.FC<AuthenticationProps> = ({ authCallback }) => {
    const [isNotSecured, setIsNotSecured] = useState(false);

    const authenticationOnPress = async () => {
        if (isNotSecured) {
            Linking.sendIntent("android.settings.SECURITY_SETTINGS");
            setIsNotSecured(false);
            return;
        }
        await localAuthInit(authCallback, setIsNotSecured);
    };

    const actionButtonText = () => {
        return isNotSecured ? "Settings" : "Authenticate";
    };

    const descText = () => {
        return isNotSecured
            ? "Set Authentication to Proceed"
            : "Authenticate Home";
    };

    return (
        <View style={AUTH_STYLE.container}>
            <Text style={TEXTSTYLES.Headline.h3}>{descText()}</Text>
            <ActionButton
                label={actionButtonText()}
                onPress={authenticationOnPress}
            />
        </View>
    );
};

export default Authentication;
