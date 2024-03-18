import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    additems: (state, action) => {
      const newitem = action.payload;
      const existingitem = state.cartItems.some((item) => {
        const stateitem = current(item);
        return stateitem.card.info.id === newitem?.card?.info?.id;
      });
      if (!existingitem) {
        // state.items.push(action.payload);
        state.cartItems = [...state.cartItems, [action.payload]];
        console.log(state, action.payload);
      }
    },
    // decreaseitems: (state, action) => {
    //   console.log(current(state));

    // },
    // increaseitems: (state, action) => {
    //   state.items.push(action.payload);
    //   state.map(item => item.card.info.id === action.payload ? { ...state, quantity: state.items.quantity + 1 } : item)

    // },
    quantity: (state, action) => {
      state.cartItems.quantity;
      console.log(state.quantity);
    },
  },
});

export const { additems, quantity, clearitems } = Cartslice.actions;

export default Cartslice.reducer;
