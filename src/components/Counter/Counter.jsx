import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue } from './../../redux/features/counter/counterSlice'; // import all actions from counterSlice

const Counter = () => {
    /**
    * counter is the counter of store.jsx
    * count is the value of initalState of the counterSlice.js
    */

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(3))}>Increment by 3</button>
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