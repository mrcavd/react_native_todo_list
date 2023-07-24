import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TODO_STYLE } from "../../../constants";
import { TodoItemType } from "../../../types";
import { ActionButton } from "../../universal";

interface TodoItemProps {
    item: TodoItemType;
    editCallback: (id: string) => void;
    removeCallback: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    item,
    editCallback,
    removeCallback,
}) => {
    const editOnPress = () => {
        editCallback(item.id);
    };

    const removeOnPress = () => {
        removeCallback(item.id);
    };

    return (
        <TouchableOpacity
            key={item.id}
            onPress={editOnPress}
            style={TODO_STYLE.todoItemContainer}
            testID="todo_item"
        >
            <View style={TODO_STYLE.todoItemInfoContainer}>
                <View style={TODO_STYLE.todoItemStatus} />
                <View style={TODO_STYLE.todoItemTextContainer}>
                    <Text style={TODO_STYLE.todoItemText} testID="label_text">
                        {item.label}
                    </Text>
                </View>
            </View>
            <ActionButton
                label={"REMOVE"}
                onPress={removeOnPress}
                buttonStyle={TODO_STYLE.removeButton}
                textStyle={TODO_STYLE.todoItemText}
            />
        </TouchableOpacity>
    );
};

export default TodoItem;
