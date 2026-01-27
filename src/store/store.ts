import { configureStore } from "@reduxjs/toolkit";
import formSlice from './reducers/FormSlice'


const store = configureStore({
    reducer: {
        formReducer: formSlice,
        
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store