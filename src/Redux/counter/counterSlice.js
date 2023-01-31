import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        IncDecByAmount:(state, action)=>{
            state.value += Number(action.payload);
        },
    },
});
export const {increment,decrement,IncDecByAmount}=counterSlice.actions;
export default counterSlice.reducer;