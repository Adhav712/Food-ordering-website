import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: null,
  },
  reducers: {
    additems: (state, action) => {
      console.log(current(state.cartItems), action.payload);
      state.cartCount++
      let itemCart = state.cartItems.find(item => {
        item.card.info.id === action.payload.card.info.id
      })

      if (itemCart) {
        console.log(item.card.info.id, action.payload.card.info.id);
        itemCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      console.log(current(state.cartItems), action.payload);
      let itemCart = state.cartItems.find(item => {
        return item.card.info.id === action.payload.card.info.id
      })
      itemCart.quantity++;
      console.log(current(itemCart));
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
      console.log(current(state.cartItems), action.payload);
      
    }
  },
});

export const { additems, incrementQuantity, decrementQuantity, deleteItems } = Cartslice.actions;

export default Cartslice.reducer;

