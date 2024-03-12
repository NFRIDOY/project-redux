import { useSelector } from 'react-redux'

const Counter = () => {
    /**
    * counter is the counter of store.jsx
    * count is the value of initalState of the counterSlice.js
    */

    const { count } = useSelector((state) => state.counter)
    return (
        <div>
            <button>Increment</button>
            <div>
                <h1>0</h1>
            </div>
            <button>Decrement</button>
        </div>
    );
};

export default Counter;