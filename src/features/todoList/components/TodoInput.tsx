import React, { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    TextInput,
    View,
    ViewProps,
} from "react-native";
import { COLORS, TODO_STYLE } from "../../../constants";
import { TodoItemType } from "../../../types";
import { ActionButton } from "../../universal";

interface TodoInputProps {
    item: TodoItemType | undefined;
    updateCallback: (id: string, label: string) => void;
    resetCallback: React.Dispatch<
        React.SetStateAction<TodoItemType | undefined>
    >;
}

const TodoInput: React.FC<TodoInputProps> = ({
    item,
    updateCallback,
    resetCallback,
}) => {
    const textInputRef = React.createRef<TextInput>();
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const onPress = () => {
        updateCallback(item?.id || "", value);
        setValue("");
        textInputRef.current?.blur();
    };

    const buttonLabelSwitch = () => {
        return item ? "UPDATE" : "ADD";
    };

    const setFocusState = () => {
        setIsFocus(true);
    };

    const resetTargetItem = () => {
        resetCallback(undefined);
        setIsFocus(false);
        if (item) {
            setValue("");
        }
    };

    const textValueOnChange = (value: string) => {
        setValue(value);
    };

    const keyboardAvoidingViewBehavior = () => {
        return Platform.OS == "ios" ? "padding" : undefined;
    };

    const bottomPadding = () => {
        return {
            paddingBottom: isFocus && Platform.OS == "ios" ? 60 : 0,
        } as ViewProps["style"];
    };

    useEffect(() => {
        if (item) {
            setValue(item.label);
            textInputRef.current?.focus();
        }
    }, [item]);

    return (
        <KeyboardAvoidingView
            behavior={keyboardAvoidingViewBehavior()}
            style={TODO_STYLE.todoInput}
        >
            <View style={TODO_STYLE.todoInputContainer}>
                <TextInput
                    ref={textInputRef}
                    placeholder="Enter here"
                    value={value}
                    style={TODO_STYLE.todoInputStyle}
                    placeholderTextColor={COLORS.Neutral.Grey}
                    onChangeText={textValueOnChange}
                    onFocus={setFocusState}
                    onBlur={resetTargetItem}
                    maxLength={500}
                />
                <ActionButton
                    label={buttonLabelSwitch()}
                    onPress={onPress}
                    buttonStyle={TODO_STYLE.todoInputConfirmButton}
                    textStyle={TODO_STYLE.todoInputConfirmText}
                />
            </View>
            <View style={bottomPadding()} />
        </KeyboardAvoidingView>
    );
};

export default TodoInput;
