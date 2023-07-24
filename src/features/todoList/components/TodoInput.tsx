import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { TODO_STYLE } from "../../../constants";
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

    const onPress = () => {
        updateCallback(item?.id || "", value);
        textInputRef.current?.blur();
    };

    const buttonLabelSwitch = () => {
        return item ? "UPDATE" : "ADD";
    };

    const resetTargetItem = () => {
        resetCallback(undefined);
        if (item) {
            setValue("");
        }
    };

    const textValueOnChange = (value: string) => {
        setValue(value);
    };

    useEffect(() => {
        if (item) {
            setValue(item.label);
            textInputRef.current?.focus();
        }
    }, [item]);

    return (
        <KeyboardAvoidingView style={TODO_STYLE.todoInput}>
            <View style={TODO_STYLE.todoInputContainer}>
                <TextInput
                    ref={textInputRef}
                    placeholder="Enter here"
                    value={value}
                    style={TODO_STYLE.todoInputStyle}
                    onChangeText={textValueOnChange}
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
        </KeyboardAvoidingView>
    );
};

export default TodoInput;
