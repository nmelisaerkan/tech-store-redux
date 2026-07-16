import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeCart, clearCart } from "../redux/cartSlice";
import {Link} from "react-router-dom";

function Cart(){
    const cart = useSelector(
        (state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    function handleRemove(id: number){
        dispatch(removeCart(id));
    }
    function handleClear(){
        dispatch(clearCart());
    }
    const totalPrice = cart.reduce(
        (total, product) => total + product.price,
        0
    );

    return(
        <div style={{ padding: "20px" }}>
            <h1>🛒 Cart</h1>
            <button onClick={handleClear}>
                🗑 Clear Cart
            </button>

            {cart.length === 0 ? (
                <p>Henüz cart'a ürün eklenmedi.</p>
            ) : (
                cart.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            marginBottom: "15px",
                            borderBottom: "1px solid #ccc",
                            paddingBottom: "10px",
                        }}
                    >
                        <Link to = {"/product/" + product.id}>
                            <h3>{product.title}</h3>

                        </Link>
                        <p>${product.price}</p>

                        <button onClick={() => handleRemove(product.id)}>
                            ❌ Remove
                        </button>

                    </div>
                ))

            )}
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
    );
}
export default Cart;