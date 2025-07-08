
import { createSlice } from "@reduxjs/toolkit";

const createBook=createSlice({
 name: "book",
 initialState:{
   items: [],
 },
 reducers:{
    addBook:(state,action)=>{
        state.items.push(action.payload)
    }
 }
})

export const {addBook}=createBook.actions
export default createBook.reducer;