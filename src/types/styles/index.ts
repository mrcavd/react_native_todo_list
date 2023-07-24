import { TextStyle } from "react-native";

export type TextStyleCategory = "Headline" | "Body";

export type TextStyleType = {
    [key in TextStyleCategory]: { [key: string]: TextStyle; };
};
