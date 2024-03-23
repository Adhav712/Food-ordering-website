import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: null,
  },
  reducers: {
    additems: (state, action) => {
      //(current(state.cartItems), action.payload);
      state.cartCount++
      let itemCart = state.cartItems.find(item => {
        item.card.info.id === action.payload.card.info.id
      })

      if (itemCart) {
        //(item.card.info.id, action.payload.card.info.id);
        itemCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      //(current(state.cartItems), action.payload);
      let itemCart = state.cartItems.find(item => {
        return item.card.info.id === action.payload.card.info.id
      })
      itemCart.quantity++;
      //(current(itemCart));
    },
    decrementQuantity: (state, action) => {
      let itemCart = state.cartItems.find(item => {
        return item.card.info.id === action.payload.card.info.id
      })
      if (itemCart.quantity === 1) {
        itemCart.quantity = 1
      } else {
        itemCart.quantity--;
      }
    },
    deleteItems: (state, action) => {
      //(current(state.cartItems), action.payload);
      let removeItems = state.cartItems.filter(item => item.card.info.id !== action.payload)
      state.cartItems = removeItems
    }
  },
});

export const { additems, incrementQuantity, decrementQuantity, deleteItems } = Cartslice.actions;

export default Cartslice.reducer;

