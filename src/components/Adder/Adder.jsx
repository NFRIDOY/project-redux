import { useDispatch, useSelector } from "react-redux"
import { add, reduce } from "../../redux/features/adderSlice/adderSlice"

export default function Adder() {
    const { value } = useSelector((state) => state.adder);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Adder</h1>
            <div>
                <button className="btn btn-error" onClick={() => dispatch(reduce())}>Reducer</button>
                <span className="mx-10">
                    {value}
                </span>
                <button className="btn btn-info" onClick={() => dispatch(add())}>Add</button>
            </div>
        </div>
    )
}
