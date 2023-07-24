import { StyleSheet } from "react-native";
import {
    COLORS,
    TEXTSTYLES,
    BUTTON_MAX_HEIGHT,
    BUTTON_MAX_WIDTH,
    BUTTON_MIN_WIDTH,
    BUTTON_MARGIN_VERTICAL,
    BUTTON_PADDING_HORIZONTAL,
    BUTTON_PADDING_VERTICAL,
} from "../../styles";

export const BUTTON_STYLE = StyleSheet.create({
    actionButtonContainer: {
        maxHeight: BUTTON_MAX_HEIGHT,
        minWidth: BUTTON_MIN_WIDTH,
        maxWidth: BUTTON_MAX_WIDTH,
        marginVertical: BUTTON_MARGIN_VERTICAL,
        borderRadius: BUTTON_MAX_HEIGHT,
        paddingHorizontal: BUTTON_PADDING_HORIZONTAL,
        paddingVertical: BUTTON_PADDING_VERTICAL,
        backgroundColor: COLORS.Primary.Default,
        justifyContent: "center",
        alignItems: "center",
    },
    actionButtonLabel: {
        ...TEXTSTYLES.Body.b1,
        fontWeight: "700",
        color: COLORS.Neutral.White,
        textAlign: "center",
    },
});
