import React from "react";
import { SafeAreaView, StatusBar, ViewProps } from "react-native";
import { TodoHome } from "./src/features";
import { COLORS } from "./src/constants";

function App(): JSX.Element {
    const appContainer = {
        flex: 1,
        backgroundColor: COLORS.Neutral.OffWhite,
    } as ViewProps;

    return (
        <SafeAreaView style={appContainer}>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={COLORS.Neutral.Black}
            />
            <TodoHome />
        </SafeAreaView>
    );
}

export default App;
