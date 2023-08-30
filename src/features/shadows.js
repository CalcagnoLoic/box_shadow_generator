import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(5),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber: 1,
                name: "Horizontal offset",
                type: "range",
                minMax: [-250, 250],
                value: 0,
            },
            {
                inputNumber: 2,
                name: "Vertical offset",
                type: "range",
                minMax: [-250, 250],
                value: 0,
            },
            {
                inputNumber: 3,
                name: "Blur radius",
                type: "range",
                minMax: [0, 250],
                value: 0,
            },
            {
                inputNumber: 5,
                name: "Color",
                type: "color",
                value: "#000",
            },
        ],
    },
];

export const shadows = createSlice({
    name: "shadows",
    initialState,
    reducers: {
        addShadow: (state, action) => {
            state.push({
                id: nanoid(5),
                active: true,
                inset: false,
                inputs: [
                    {
                        inputNumber: 1,
                        name: "Horizontal offset",
                        type: "range",
                        minMax: [-250, 250],
                        value: 0,
                    },
                    {
                        inputNumber: 2,
                        name: "Vertical offset",
                        type: "range",
                        minMax: [-250, 250],
                        value: 0,
                    },
                    {
                        inputNumber: 3,
                        name: "Blur radius",
                        type: "range",
                        minMax: [0, 250],
                        value: 0,
                    },
                    {
                        inputNumber: 5,
                        name: "Color",
                        type: "color",
                        value: "#000",
                    },
                ],
            });
        },
        removeShadow: (state, action) => {},
        updateValueShadow: (state, action) => {},
        updateCheckbox: (state, action) => {},
    },
});

export const { addShadow, removeShadow, updateValueShadow, updateCheckbox } =
    shadows.actions;
export default shadows.reducer;
