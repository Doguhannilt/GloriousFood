import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    payment: 0
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        takeAllOrders: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            const price = parseFloat(newItem.Price.replace(/[^0-9.-]+/g, ""));
            state.payment += price;
        },
        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === itemId);

            if (existingItemIndex >= 0) {
                const price = parseFloat(state.items[existingItemIndex].Price.replace(/[^0-9.-]+/g, ""));
                state.items[existingItemIndex].quantity += 1;
                state.payment += price;
            }
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === itemId);

            if (existingItemIndex >= 0 && state.items[existingItemIndex].quantity > 1) {
                const price = parseFloat(state.items[existingItemIndex].Price.replace(/[^0-9.-]+/g, ""));
                state.items[existingItemIndex].quantity -= 1;
                state.payment -= price;
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === itemId);

            if (existingItemIndex >= 0) {
                const price = parseFloat(state.items[existingItemIndex].Price.replace(/[^0-9.-]+/g, ""));
                state.payment -= state.items[existingItemIndex].quantity * price;
                state.items.splice(existingItemIndex, 1);
            }
        },
        clearCost: (state) => {
            state.payment = 0;
            state.items = [];
        }
    }
});

export const { takeAllOrders, incrementQuantity, decrementQuantity, removeItem, clearCost } = orderSlice.actions;
export default orderSlice.reducer;
