import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

export default function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <p>Total: ${item.price * item.quantity}</p>

            {/* Increase quantity */}
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, type: "increase" }))
              }
            >
              +
            </button>

            {/* Decrease quantity */}
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, type: "decrease" }))
              }
            >
              -
            </button>

            {/* Delete item */}
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Total Amount: ${totalAmount}</h2>

      {/* Checkout */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      {/* Continue shopping */}
      <button onClick={() => window.location.href = "/"}>
        Continue Shopping
      </button>
    </div>
  );
}