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
                existingItem.selectedSize = action.payload.selectedSize
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
        clearCart: (state) => {
            state.cartItems = [];
            saveToLocalStorage("cartItems", state.cartItems);
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveToLocalStorage("cartItems", state.cartItems);
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveToLocalStorage("cartItems", state.cartItems);
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;