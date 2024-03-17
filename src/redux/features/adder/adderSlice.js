import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100,
}
export const adderSlice = createSlice({
    name: "adder",
    initialState,
    reducers: {
        add: (state) => {
            state.value = state.value + 1
        },
        reduce: (state) => {
            state.value = state.value - 1
        }
    }
})

export const { add, reduce } = adderSlice.actions

export default adderSlice.reducer;