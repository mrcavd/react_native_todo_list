import { StyleSheet } from "react-native";
import { COLORS, TEXTSTYLES } from "../theme";
import {
    BUTTON_PADDING_VERTICAL,
    HORIZONTOAL_MARGIN,
    VERTICAL_MARGIN,
} from "../universal";

const ITEM_PADDING_HORIZONTAL = 20;
const ITEM_PADDING_VERTICAL = 20;
const ITEM_MARGIN_HORIZONTAL = 10;
const ITEM_SEPARATOR = 15;
const ITEM_BORDER_RADIUS = 20;
const INPUT_PADDING = 15;
const CONFIRM_BUTTON_MIN_WIDTH = 90;

export const TODO_STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Neutral.OffWhite,
    },
    header: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerText: {
        ...TEXTSTYLES.Headline.h2,
        color: COLORS.Primary.Default,
    },
    todoItemContainer: {
        backgroundColor: COLORS.Neutral.White,
        borderRadius: ITEM_BORDER_RADIUS,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: ITEM_PADDING_HORIZONTAL,
        paddingVertical: ITEM_PADDING_VERTICAL,
        marginBottom: ITEM_SEPARATOR,
        marginHorizontal: ITEM_MARGIN_HORIZONTAL,
    },
    todoItemInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "75%",
    },
    todoItemText: {
        ...TEXTSTYLES.Body.b1,
        color: COLORS.Neutral.Black,
        marginHorizontal: ITEM_MARGIN_HORIZONTAL,
    },
    todoItemStatus: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: COLORS.Primary.Default,
    },
    todoItemTextContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    removeButton: {
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    todoInput: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
    },
    todoInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.Neutral.White,
        marginHorizontal: HORIZONTOAL_MARGIN,
        marginVertical: VERTICAL_MARGIN,
        borderRadius: ITEM_BORDER_RADIUS,
        padding: INPUT_PADDING,
    },
    todoInputConfirmButton: {
        backgroundColor: COLORS.Primary.Default,
        minWidth: CONFIRM_BUTTON_MIN_WIDTH,
        padding: BUTTON_PADDING_VERTICAL,
        borderRadius: ITEM_BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
    },
    todoInputConfirmText: {
        ...TEXTSTYLES.Body.b1,
        fontWeight: "700",
        color: COLORS.Neutral.White,
    },
    todoInputStyle: {
        flex: 1,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.Neutral.Grey,
        ...TEXTSTYLES.Body.b1,
        color: COLORS.Neutral.Black,
    },
});
