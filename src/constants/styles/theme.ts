import { TextStyleType } from "../../types";

export const COLORS = {
    Primary: {
        Default: "#305ABB",
    },
    Neutral: {
        White: "#FFFFFF",
        OffWhite: "#F0F0F0",
        Grey: "#ABABAB",
        Black: "#222222",
    },
    Success: {
        Default: "#1B6E53",
    },
    Warning: {
        Default: "#FFA826",
    },
    Error: {
        Default: "#EF5350",
    },
};

export const TEXTSTYLES: TextStyleType = {
    Headline: {
        h1: {
            fontSize: 36,
            fontWeight: "700",
            color: COLORS.Neutral.Black,
        },
        h2: {
            fontSize: 24,
            fontWeight: "700",
            color: COLORS.Neutral.Black,
        },
        h3: {
            fontSize: 20,
            color: COLORS.Neutral.Black,
        },
    },
    Body: {
        b1: {
            fontSize: 16,
            color: COLORS.Neutral.Black,
        },
        b2: {
            fontSize: 14,
            color: COLORS.Neutral.Black,
        },
    },
};
