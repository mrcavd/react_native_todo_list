import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { TodoHome } from "./src/features";
import { COLORS } from "./src/constants";

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    const appContainer = {
        flex: 1,
    };

    return (
        <SafeAreaView style={appContainer}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={COLORS.Neutral.Black}
            />
            <TodoHome />
        </SafeAreaView>
    );
}

export default App;
