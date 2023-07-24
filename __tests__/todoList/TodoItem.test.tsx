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

    it('Renders the "REMOVE" button correctly with a long label', () => {
        const removeCallbackMock = jest.fn();
        const item = {
            id: "unique_id_1",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        };

        const component = renderer.create(
            <TodoItem
                item={item}
                editCallback={() => {}}
                removeCallback={removeCallbackMock}
            />
        );

        const renderedButtonComponent = component.root.findByProps({
            testID: "remove_button",
        });

        const renderedButtonText =
            renderedButtonComponent.props.children.props.children;

        expect(renderedButtonText).toBe("REMOVE");
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
