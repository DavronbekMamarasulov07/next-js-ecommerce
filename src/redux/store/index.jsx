// lib/store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api"; // api to'g'ri import qilinayotganiga ishonch hosil qil
import likeSlice from '../slices/like-slice';
import cartSlice from '../slices/cart-slice';

const store = configureStore({
  reducer: {
    like: likeSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer, // api.reducer to'g'ri ishlayotganiga ishonch hosil qil
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // api.middleware bu yerda qo'shilgan bo'lishi kerak
});

export default store;
