import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { TODO_STYLE } from "../../constants";
import { Authentication } from "../authentication";
import { TodoHeader, TodoInput, TodoItem } from "./components";
import { TodoItemType } from "../../types/todo";
import {
    selectItemById,
    removeItemById,
    updateItemById,
    addNewItem,
} from "../../helpers";

const tempData: TodoItemType[] = [
    {
        label: "First Item",
        id: "uniqueId1",
    },
    {
        label: "Second Item",
        id: "uniqueId2",
    },
];

const TodoHome = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [todoItems, setTodoItems] = useState<TodoItemType[]>(tempData);
    const [editItem, setEditItem] = useState<TodoItemType>();

    if (!isAuth) {
        return <Authentication authCallback={setIsAuth} />;
    }

    const confirmButtonOnPressSwitch = (id: string, label: string) => {
        if (!label) return;
        if (editItem) {
            updateItemById(todoItems, id, label, setTodoItems);
        } else {
            addNewItem(todoItems, label, setTodoItems);
        }
    };

    const editOnPress = (id: string) => {
        selectItemById(todoItems, id, setEditItem);
    };

    const removeOnPress = (id: string) => {
        removeItemById(todoItems, id, setTodoItems);
    };

    const renderTodoItems: ListRenderItem<TodoItemType> = ({ item }) => {
        return (
            <TodoItem
                item={item}
                editCallback={editOnPress}
                removeCallback={removeOnPress}
            />
        );
    };

    return (
        <View style={TODO_STYLE.container}>
            <TodoHeader />
            <FlatList
                data={todoItems}
                keyExtractor={(item) => item.id}
                renderItem={renderTodoItems}
            />
            <TodoInput
                item={editItem}
                updateCallback={confirmButtonOnPressSwitch}
                resetCallback={setEditItem}
            />
        </View>
    );
};

export default TodoHome;
