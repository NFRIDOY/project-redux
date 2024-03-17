import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";
import adderReducer from "./features/adder/adderSlice";

/**
 * configureStore is a function
 */
const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        adder: adderReducer,
    },
});

export default store;
