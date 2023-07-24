import { TodoItemType } from "../types";

/**
 * Add a new item to the todoItems array and update it with the new item.
 *
 * @param {TodoItemType[]} todoItems - The current array of todo items.
 * @param {string} label - The label of the new item to be added.
 * @param {React.Dispatch<React.SetStateAction<TodoItemType[]>>} updateCallback - The state update callback to set the updated todoItems.
 * @returns {void}
 */
const addNewItem = (
    todoItems: TodoItemType[],
    label: string,
    updateCallback: React.Dispatch<React.SetStateAction<TodoItemType[]>>
) => {
    // use uuid instead of relying on timestamps when more package is added
    const id = Date.now().toFixed(0);
    const map = new Map(todoItems.map((item) => [item.id, item]));
    map.set(id, { label: label, id: id });
    updateCallback(Array.from(map.values()));
};

/**
 * Selects an item from the todoItems array based on its id and calls the selectCallback with the selected item.
 * If the item with the given id is not found in the array, it throws an error with the message "TARGET_NOT_FOUND".
 *
 * @param {TodoItemType[]} todoItems - The array of todo items to search for the target item.
 * @param {string} id - The id of the item to be selected.
 * @param {React.Dispatch<React.SetStateAction<TodoItemType | undefined>>} selectCallback - The state update callback to set the selected item.
 * @throws {Error} Throws an error with the message "TARGET_NOT_FOUND" if the item with the given id is not found.
 * @returns {void}
 */
const selectItemById = (
    todoItems: TodoItemType[],
    id: string,
    selectCallback: React.Dispatch<
        React.SetStateAction<TodoItemType | undefined>
    >
) => {
    const map = new Map(todoItems.map((item) => [item.id, item]));
    const target = map.get(id);
    if (target) {
        selectCallback(target);
    } else {
        throw new Error("TARGET_NOT_FOUND");
    }
};

/**
 * Updates the label of an item in the todoItems array based on its id and calls the updateCallback with the updated array.
 * If the item with the given id is not found in the array, it throws an error with the message "TARGET_NOT_FOUND".
 *
 * @param {TodoItemType[]} todoItems - The array of todo items to search for the target item.
 * @param {string} id - The id of the item to be updated.
 * @param {string} updatedLabel - The updated label for the item.
 * @param {React.Dispatch<React.SetStateAction<TodoItemType[]>>} updateCallback - The state update callback to set the updated array.
 * @throws {Error} Throws an error with the message "TARGET_NOT_FOUND" if the item with the given id is not found.
 * @returns {void}
 */
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
        throw new Error("TARGET_NOT_FOUND");
    }
};

/**
 * Removes an item from the todoItems array based on its id and calls the updateCallback with the updated array.
 * If the item with the given id is not found in the array, it throws an error with the message "TARGET_NOT_FOUND".
 *
 * @param {TodoItemType[]} todoItems - The array of todo items to search for the target item.
 * @param {string} id - The id of the item to be removed.
 * @param {React.Dispatch<React.SetStateAction<TodoItemType[]>>} updateCallback - The state update callback to set the updated array.
 * @throws {Error} Throws an error with the message "TARGET_NOT_FOUND" if the item with the given id is not found.
 * @returns {void}
 */
const removeItemById = (
    todoItems: TodoItemType[],
    id: string,
    updateCallback: React.Dispatch<React.SetStateAction<TodoItemType[]>>
) => {
    const map = new Map(todoItems.map((item) => [item.id, item]));
    const target = map.get(id);
    if (target) {
        map.delete(id);
        updateCallback(Array.from(map.values()));
    } else {
        throw new Error("TARGET_NOT_FOUND");
    }
};

export { addNewItem, selectItemById, updateItemById, removeItemById };
