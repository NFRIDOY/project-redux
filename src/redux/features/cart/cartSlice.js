import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: 10
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state) => {
            state.cart = state.cart + 1
        },
        remove: (state) => {
            state.cart = state.cart - 1
        }
    }
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer