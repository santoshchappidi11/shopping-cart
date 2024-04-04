import { ShoppingCart } from "../context/ShoppingcartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
    totalAmount,
  } = ShoppingCart();

  const newTotalAmount = totalAmount && totalAmount.toLocaleString();

  return (
    <div className={styles["checkout"]}>
      <div className={styles["checkout-container"]}>
        <h2>
          Items: <span>{cart.length}</span>
        </h2>
        <h1>
          Total: <span>₹ {newTotalAmount}</span>
        </h1>
        <button>Checkout</button>
        <button
          onClick={() => {
            dispatch({
              type: "CLEAR-CART",
            });
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
