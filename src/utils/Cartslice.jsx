import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    additems: (state, action) => {
      state.cartItems = [...state.cartItems, [action.payload]];
      // console.log(state.cartItems.length);
    },
    quantity: (state, action) => {
      console.log(state);
      console.log(state.cartCount);
      state.cartCount = state.cartItems.length
    }
  },
});

export const { additems } = Cartslice.actions;

export default Cartslice.reducer;
