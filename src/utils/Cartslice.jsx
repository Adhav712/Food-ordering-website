import { createSlice, current } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      const newitem = action.payload;
      const existingitem = state.items.some((item) => {
        const stateitem = current(item);
        return stateitem.card.info.id === newitem?.card?.info?.id;
      });
      if (!existingitem) {
        state.items.push(action.payload);
      } else {
        //console.log("same");
      }
    },
    decreaseitems: (state, action) => {
      //console.log(current(state));
    },
    increaseitems: (state, action) => {},
    clearitems: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { additems, clearitems } = Cartslice.actions;

export default Cartslice.reducer;
