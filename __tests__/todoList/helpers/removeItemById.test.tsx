import { jest, it, describe, expect } from "@jest/globals";
import { removeItemById } from "../../../src/helpers";
import { FULL_LIST, REMOVED_LIST } from "../../../__mocks__/todo_items";

describe("removeItemById helper test suite", () => {
    it("should remove the item with the specified id and update the todoItems", () => {
        const todoItems = FULL_LIST;
        const idToRemove = "uniqueId2";

        const updateCallbackMock = jest.fn();
        removeItemById(todoItems, idToRemove, updateCallbackMock);

        // Verify that updateCallbackMock is called with the updated todoItems after removing the item
        expect(updateCallbackMock).toHaveBeenCalledTimes(1);
        expect(updateCallbackMock).toHaveBeenCalledWith(REMOVED_LIST);
    });

    it("should catch an error if the item with the specified id is not found", () => {
        const todoItems = FULL_LIST;
        const idToRemove = "4"; // This id is not present in the todoItems
        const updateCallbackMock = jest.fn();

        try {
            removeItemById(todoItems, idToRemove, updateCallbackMock);
        } catch (error) {
            const castedError = error as Error;
            expect(castedError.message).toBe("TARGET_NOT_FOUND");
        }
    });
});
