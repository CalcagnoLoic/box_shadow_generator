import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        inputNumber: 1,
        name: "Border radius",
        value: 15,
        minMax: [0, 250],
        type: "range",
    },
    {
        inputNumber: 2,
        name: "Height",
        value: 250,
        minMax: [0, 500],
        type: "range",
    },
    {
        inputNumber: 3,
        name: "Width",
        value: 250,
        minMax: [0, 500],
        type: "range",
    },
    {
        inputNumber: 4,
        name: "Background color",
        value: "#fff",
        type: "color",
    },
];

export const boxProperties = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updateBoxPropertiesValue: (state, action) => {
            state.find(
                (e) => e.inputNumber === action.payload.inputNumber
            ).value = action.payload.value;
        },
    },
});

export const { updateBoxPropertiesValue } = boxProperties.actions;
export default boxProperties.reducer;
