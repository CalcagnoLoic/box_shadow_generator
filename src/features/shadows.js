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
                value: 5,
            },
            {
                inputNumber: 3,
                name: "Blur radius",
                type: "range",
                minMax: [0, 250],
                value: 10,
            },
            {
                inputNumber: 4,
                name: "Spread Radius",
                type: "range",
                minMax: [0, 250],
                value: 5,
            },
            {
                inputNumber: 5,
                name: "Color",
                type: "color",
                value: "#fff",
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
                        value: 5,
                    },
                    {
                        inputNumber: 3,
                        name: "Blur radius",
                        type: "range",
                        minMax: [0, 250],
                        value: 10,
                    },
                    {
                        inputNumber: 4,
                        name: "Spread Radius",
                        type: "range",
                        minMax: [0, 250],
                        value: 5,
                    },
                    {
                        inputNumber: 5,
                        name: "Color",
                        type: "color",
                        value: "#fff",
                    },
                ],
            });
        },

        removeShadow: (state, action) => {
            state.pop({
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
                        inputNumber: 4,
                        name: "Spread Radius",
                        type: "range",
                        minMax: [0, 250],
                        value: 0,
                    },
                    {
                        inputNumber: 5,
                        name: "Color",
                        type: "color",
                        value: "#fff",
                    },
                ],
            });
        },

        updateValueShadow: (state, action) => {
            const currentShadowID = state.find(
                (shadow) => shadow.id === action.payload.shadowID
            );
            const currentInput = currentShadowID.inputs.find(
                (input) => input.inputNumber === action.payload.inputNumber
            );

            currentInput.value = action.payload.value;
        },

        updateCheckbox: (state, action) => {
            const currentShadowID = state.find(
                (shadow) => shadow.id === action.payload.shadowID
            );

            currentShadowID[action.payload.name] =
                !currentShadowID[action.payload.name];
        },
    },
});

export const { addShadow, removeShadow, updateValueShadow, updateCheckbox } =
    shadows.actions;
export default shadows.reducer;
