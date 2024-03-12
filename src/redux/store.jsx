import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";

/**
 * configureStore is a function
 */
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
