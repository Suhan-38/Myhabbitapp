import { configureStore } from "@reduxjs/toolkit";
import habitreducer from './slice'
//here we create a store and add particular reducer created by createslice function and then will import it in index.js
export const store=configureStore({
    reducer: {
        habit: habitreducer,
    }
})