import { configureStore } from "@reduxjs/toolkit";
import addBookSlice from "./addBookSlice";

const appStore=configureStore({
    reducer:{
        book:addBookSlice
    }
})

export default appStore