import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue } from './../../redux/features/counter/counterSlice'; // import all actions from counterSlice
import { useState } from 'react';

const Counter = () => {
    /**
    * counter is the counter of store.jsx
    * count is the value of initalState of the counterSlice.js
    */

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [input, setInput] = useState(null);
    return (
        <div>
            {/* <input type="number" name="incrementValue" id="" /> */}
            <button onClick={() => dispatch(incrementByValue(input))}>Increment by</button>
            <input
                className='mx-10 w-96'
                type="number"
                value={input}
                onInput={e => setInput(parseFloat(e.target.value))}
                placeholder='Enter Dynamic Value to increment'
            />
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;