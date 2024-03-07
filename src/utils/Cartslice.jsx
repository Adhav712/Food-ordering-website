import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        additems: (state, action) => {
            state.items.push(action.payload)
        },
        clearitems: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { additems, clearitems } = Cartslice.actions

export default Cartslice.reducer