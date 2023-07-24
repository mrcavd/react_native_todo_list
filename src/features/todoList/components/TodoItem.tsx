import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TODO_STYLE } from "../../../constants";
import { TodoItemType } from "../../../types";

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
        >
            <View style={TODO_STYLE.todoItemInfoContainer}>
                <View style={TODO_STYLE.todoItemStatus} />
                <View style={TODO_STYLE.todoItemTextContainer}>
                    <Text style={TODO_STYLE.todoItemText}>{item.label}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={removeOnPress}
                style={TODO_STYLE.removeButton}
            >
                <Text numberOfLines={1} style={TODO_STYLE.todoItemText}>
                    REMOVE
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default TodoItem;
