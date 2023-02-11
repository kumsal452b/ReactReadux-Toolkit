import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpen:false
}
const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        closeModel:(state)=>{
            state.isOpen=false;
        },
        openModel:(state)=>{
            state.isOpen=true;
        },
    }
})

export const closeModal=modalSlice.actions.closeModel;
export const openModal=modalSlice.actions.openModel;
export default modalSlice.reducer;