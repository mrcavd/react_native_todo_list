import React from "react";
import renderer from "react-test-renderer";
import { jest, describe, it, expect } from "@jest/globals";
import TodoItem from "../../src/features/todoList/components/TodoItem";

describe("LandmarkOfferTopHat", () => {
    it("TodoItem renders correctly", () => {
        const item = { id: "1", label: "Test Todo" };
        const tree = renderer
            .create(
                <TodoItem
                    item={item}
                    editCallback={() => {}}
                    removeCallback={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Edit callback is called when TodoItem is pressed", () => {
        const item = { id: "unique_id_1", label: "Test Todo" };
        const editCallbackMock = jest.fn();
        const component = renderer.create(
            <TodoItem
                item={item}
                editCallback={editCallbackMock}
                removeCallback={() => {}}
            />
        );
        const todoItem = component.root.findByProps({ testID: "todo_item" });

        todoItem.props.onPress();
        expect(editCallbackMock).toHaveBeenCalledWith("unique_id_1");
    });

    it('Remove callback is called when "REMOVE" button is pressed', () => {
        const item = { id: "unique_id_1", label: "Test Todo" };
        const removeCallbackMock = jest.fn();
        const component = renderer.create(
            <TodoItem
                item={item}
                editCallback={() => {}}
                removeCallback={removeCallbackMock}
            />
        );
        const removeButton = component.root.findByProps({
            testID: "remove_button",
        });

        removeButton.props.onPress();
        expect(removeCallbackMock).toHaveBeenCalledWith("unique_id_1");
    });
});
