import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"ober",
    initialState:{
        items:[],
    },
    reducers:{
       addBook:(state,action)=>{
        state.items.push(action.payload)
       } 
    }
})