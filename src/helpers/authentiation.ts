import * as LocalAuthentication from "expo-local-authentication";
import { Platform } from "react-native";

/**
 * Checks if local authentication (e.g., fingerprint or face recognition) is supported on the device.
 *
 * @async
 * @function
 * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating whether local authentication is supported.
 *
 * @throws {Error} If there is an error while checking for hardware support.
 */
const localAuthSupported = async (): Promise<boolean> => {
    return await LocalAuthentication.hasHardwareAsync();
};

/**
 * Checks if the user has enrolled in local authentication (e.g., fingerprint or face recognition).
 *
 * @async
 * @function
 * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating whether the user has enrolled in local authentication.
 *
 * @throws {Error} If there is an error while checking for local authentication enrollment.
 */
const localAuthEnrolled = async (): Promise<boolean> => {
    return await LocalAuthentication.isEnrolledAsync();
};

/**
 * Initiates local authentication (e.g., fingerprint or face recognition) for the user.
 *
 * @async
 * @function
 * @returns {Promise<LocalAuthentication.LocalAuthenticationResult>} A Promise that resolves to the result of the local authentication process.
 *
 * @throws {Error} If there is an error while performing local authentication or if the user cancels the authentication process.
 */
const localAuthTrigger = async (): Promise<LocalAuthentication.LocalAuthenticationResult> => {
    const options: LocalAuthentication.LocalAuthenticationOptions = {
        promptMessage: "Please enable local authentication",
    };

    return await LocalAuthentication.authenticateAsync(options);
};

/**
 * Initiates the local authentication process for the user and updates the authentication state.
 *
 * @async
 * @function
 * @param {React.Dispatch<React.SetStateAction<boolean>>} authCallback - The state update callback to set the authentication state.
 * @returns {Promise<void>} A Promise that resolves after the local authentication process is completed or an error occurs.
 *
 * @throws {Error} If there is an error while performing local authentication.
 */
const localAuthInit = async (
    authCallback: React.Dispatch<React.SetStateAction<boolean>>,
    notSecuredCallback: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
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
                notSecuredCallback(true);
                return;
            }
        }
    } catch (error) {
        // TODO: handle error message here
        console.error(error);
    }
};

export { localAuthInit };
