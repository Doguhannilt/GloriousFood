import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurant: []  // Changed key to lowercase
};

export const hotelInformationSlice = createSlice({
    name: "hotelInformation",
    initialState,
    reducers: {
        takeAllInformation: (state, action) => {
            state.restaurant = action.payload;  
        }
    }
});

export const { takeAllInformation } = hotelInformationSlice.actions;
export default hotelInformationSlice.reducer;
