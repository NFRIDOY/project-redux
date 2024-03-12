import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

/**
 * const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
    })
 */

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // an action
        increment: (state) => {
            /**
             * state is the initialState
             * use (.) for accessing the inner properties like count.
             */
            state.count = state.count + 1;
        },
        // an action
        decrement: (state) => {
            state.count -= 1;
        }
    },

})

export const { increment, decrement } = counterSlice.actions; // exporting all actions

export default counterSlice.reducer;