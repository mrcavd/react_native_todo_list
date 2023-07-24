/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: import explicitly to use the types shiped with jest.
import { describe, jest, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import * as LocalAuthentication from "expo-local-authentication";
jest.mock("expo-local-authentication");

describe("App Suite", () => {
    it("renders correctly", () => {
        renderer.create(<App />);
    });
});
