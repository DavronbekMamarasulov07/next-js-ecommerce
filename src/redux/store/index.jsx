// lib/store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api"; // api to'g'ri import qilinayotganiga ishonch hosil qil

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // api.reducer to'g'ri ishlayotganiga ishonch hosil qil
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // api.middleware bu yerda qo'shilgan bo'lishi kerak
});

export default store;
