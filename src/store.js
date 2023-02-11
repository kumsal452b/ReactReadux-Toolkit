import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../src/features/cart/cartSlice'
import modalSlice from './features/cart/modalSlice'
export const store=configureStore({
    reducer:{
        cart:cartSlice,
        modal:modalSlice
    }
})