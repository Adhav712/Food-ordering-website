import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    additems: (state, action) => {
      console.log(current(state.cartItems), action.payload);
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        console.log('add');
        console.log(current(state.cartItems));

      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, selected: true });
        console.log('push');
        console.log(current(state.cartItems));

      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1
      }
      else {
        item.quantity--
      }
    }
  },
});

export const { additems } = Cartslice.actions;

export default Cartslice.reducer;

// state.cartItems.push(action.payload)
// console.log(current(state.cartItems), action.payload);
// state.cartItems.map(item =>
//   // if (item.info.id === action.payload.info.id) {
//   //   item.dishQuantity += 1
//   // }

//   item.info.id === action.payload.info.id ?
//     { ...state, dishQuantity: item.dishQuantity += 1 }
//     : state,
// )