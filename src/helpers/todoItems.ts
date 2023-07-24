import { TodoItemType } from "../types";

const addNewItem = (
    todoItems: TodoItemType[],
    label: string,
    updateCallback: React.Dispatch<React.SetStateAction<TodoItemType[]>>
) => {
    const id = Date.now().toFixed(0);
    const map = new Map(todoItems.map((item) => [item.id, item]));
    map.set(id, { label: label, id: id });
    updateCallback(Array.from(map.values()));
};

const selectItemById = (
    todoItems: TodoItemType[],
    id: string,
    selectCallback: React.Dispatch<
        React.SetStateAction<TodoItemType | undefined>
    >
) => {
    const target = todoItems.find((item) => item.id == id);
    selectCallback(target);
};

const updateItemById = (
    todoItems: TodoItemType[],
    id: string,
    updatedLabel: string,
    updateCallback: React.Dispatch<React.SetStateAction<TodoItemType[]>>
) => {
    const map = new Map(todoItems.map((item) => [item.id, item]));
    const target = map.get(id);
    if (target) {
        map.set(id, { ...target, label: updatedLabel });
        updateCallback(Array.from(map.values()));
    } else {
        // TODO: error callback
    }
};

const removeItemById = (
    todoItems: TodoItemType[],
    id: string,
    updateCallback: React.Dispatch<React.SetStateAction<TodoItemType[]>>
) => {
    const map = new Map(todoItems.map((item) => [item.id, item]));
    map.delete(id);
    updateCallback(Array.from(map.values()));
};

export { addNewItem, selectItemById, updateItemById, removeItemById };
