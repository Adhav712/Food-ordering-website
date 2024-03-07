import { configureStore } from '@reduxjs/toolkit'
import Cartslice from './Cartslice'

const appstore = configureStore({
    reducer: {
        cart: Cartslice,
    }
})

export default appstore