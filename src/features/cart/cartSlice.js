import { createSlice } from "@reduxjs/toolkit"; 
import cartItems from '../../cartItems'
const initialState={
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true
}
const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[]
        }
    }
})
export const clearCart = cartSlice.actions.clearCart;
export default cartSlice.reducer;