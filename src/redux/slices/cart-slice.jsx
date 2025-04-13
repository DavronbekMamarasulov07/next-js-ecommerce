import { saveToLocalStorage } from "@/helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: typeof window !== "undefined" && localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                saveToLocalStorage("cartItems", state.cartItems);
                return
            }
            state.cartItems.push(action.payload);
            saveToLocalStorage("cartItems", state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            saveToLocalStorage("cartItems", state.cartItems);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;