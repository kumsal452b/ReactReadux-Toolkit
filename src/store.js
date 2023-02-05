import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../../starter/src/features/cart/cartSlice'
export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})