import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        inputNumber: 1,
        name: "Border radius",
        value: 0,
        minMax: [0, 250],
        type: "range",
        slice: "boxProperties",
    },
    {
        inputNumber: 2,
        name: "Height",
        value: 0,
        minMax: [0, 500],
        type: "range",
        slice: "boxProperties",
    },
    {
        inputNumber: 3,
        name: "Width",
        value: 0,
        minMax: [0, 500],
        type: "range",
        slice: "boxProperties",
    },
    {
        inputNumber: 4,
        name: "Background color",
        value: "#000",
        type: "color",
        slice: "boxProperties",
    },
];

export const boxProperties = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updateBoxPropertiesValue: (state, action) => {},
    },
});

export const { updateBoxPropertiesValue } = boxProperties.actions;
export default boxProperties.reducer;
