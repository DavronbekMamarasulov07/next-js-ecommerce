import { createSlice  } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../../helpers/index";

const initialState = {
  likedProducts: typeof window !== "undefined" && localStorage.getItem("likedProducts") ? JSON.parse(localStorage.getItem("likedProducts")) : [],
};


const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
      } else {
        state.likedProducts = state.likedProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }

      saveToLocalStorage("likedProducts", state.likedProducts);
    },
    removeFromLiked: (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (product) => product.id !== action.payload
      );
      saveToLocalStorage("likedProducts", state.likedProducts);
    },
  },
});

export default likeSlice.reducer;
export const { addToLiked, removeFromLiked } = likeSlice.actions;
