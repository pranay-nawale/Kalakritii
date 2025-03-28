import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description,
        imageUrl: action.payload.imageUrl, // ✅ Make sure imageUrl is stored
      });
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
