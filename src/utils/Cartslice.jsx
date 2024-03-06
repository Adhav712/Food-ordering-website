import { createSlice } from "@reduxjs/toolkit";


export const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        adding(state, action) {
            state.items.push(action.payload)
        },
        removeitem(state) {
            state.items.pop()
        },
        clearitem(state) {
            state.items.length = 0
        }
    }
})
export const { adding, removeitem, clearitem } = Cartslice.actions


export default Cartslice.reducer