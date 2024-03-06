import { configureStore } from '@reduxjs/toolkit'
import Cartslice from './Cartslice'


const reduxstore = configureStore({
    reducer: {
        cart: Cartslice,
    },
}
)

export default reduxstore;