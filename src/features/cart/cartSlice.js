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
        },
        removeItems:(state,actions)=>{
            state.cartItems=state.cartItems.filter(item=>item.id!==actions.payload);
        },
        increase:(state,{payload})=>{
            const theItem=state.cartItems.find(el=>el.id===payload.id);
            theItem.amount+=1;
        },
        decrease:(state,{payload})=>{
            const theItem=state.cartItems.find(el=>el.id===payload.id);
            if(theItem.amount==1){
                state.cartItems=state.cartItems.filter(item=>item.id!==payload.id);
            }
            theItem.amount-=1;
        },
        calculateTotals:(state)=>{
            let total=0;
            let amount=0;
            state.cartItems.forEach(el=>{
                amount+=el.amount;
                total+=el.amount*el.price;
            })
            state.amount=amount;
            state.total=total.toFixed(2);
        }
    }
})
export const clearCart = cartSlice.actions.clearCart;
export const removeItems = cartSlice.actions.removeItems;
export const increase = cartSlice.actions.increase;
export const decrease = cartSlice.actions.decrease;
export const calculateTotals=cartSlice.actions.calculateTotals;
export default cartSlice.reducer;