import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingProducts: [], // Products submitted by seller, waiting for admin approval
  approvedProducts: [], // Products approved by admin, displayed on website
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    submitProduct: (state, action) => {
      state.pendingProducts.push(action.payload); // Seller submits product
    },
    approveProduct: (state, action) => {
      const product = state.pendingProducts.find((p) => p.id === action.payload);
      if (product) {
        state.approvedProducts.push(product); // Move product to approved list
        state.pendingProducts = state.pendingProducts.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const { submitProduct, approveProduct } = productSlice.actions;
export default productSlice.reducer;
