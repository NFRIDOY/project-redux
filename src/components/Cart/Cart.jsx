import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../../redux/features/cart/cartSlice"


export default function Cart() {
    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>
                Cart
            </h1>
            <div className="flex items-center ">
                <button className="btn btn-success" onClick={()=> dispatch(add())}>Add</button>
                <span
                    className="mx-10 text-4xl"
                >
                    {cart}
                </span>
                <button className="btn btn-error" onClick={()=> dispatch(remove())}>Remove</button>
            </div>
        </div>
    )
}
