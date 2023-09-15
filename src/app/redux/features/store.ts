import { configureStore } from "@reduxjs/toolkit";
import mReducers from './timer'
export const store = configureStore({
    reducer:{
        mReducers
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;