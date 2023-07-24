import * as LocalAuthentication from "expo-local-authentication";
import { Linking, Platform } from "react-native";

const localAuthSupported = async () => {
    return await LocalAuthentication.hasHardwareAsync();
};

const localAuthEnrolled = async () => {
    return await LocalAuthentication.isEnrolledAsync();
};

const localAuthTrigger = async () => {
    const options: LocalAuthentication.LocalAuthenticationOptions = {
        promptMessage: "Please enable local authentication",
    };

    return await LocalAuthentication.authenticateAsync(options);
};

const listLocalAuthType = async () => {
    const supportTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log("supportTypes: ", supportTypes);

    if (
        supportTypes.includes(
            LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
    ) {
        console.log("Facial recognition");
    }
};

const localAuthLevel = async () => {
    const level = await LocalAuthentication.getEnrolledLevelAsync();
    console.log("auth level: ", level);
};

const localAuthInit = async (
    authCallback: React.Dispatch<React.SetStateAction<boolean>>
) => {
    try {
        const isSupported = await localAuthSupported();
        const isEnrolled = await localAuthEnrolled();
        if (!isSupported) {
            // TODO set unsupported state
        } else {
            const results = await localAuthTrigger();
            if (results.success) {
                authCallback(true);
            }
            // @ts-ignore
            if (results.warning && Platform.OS == "android") {
                Linking.sendIntent("android.settings.SECURITY_SETTINGS");
                return;
            }
        }
    } catch (error) {
        // TODO: handle error message here
        console.error(error);
    }
};

export { localAuthInit };
