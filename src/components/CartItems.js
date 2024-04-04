import emptyImage from "../Images/empty-cart.png";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./CartItems.module.css";
import { ShoppingCart } from "../context/ShoppingcartContext";

const CartItems = () => {
  const {
    state: { cart },
    dispatch,
  } = ShoppingCart();

  return (
    <>
      <div className={styles["cart-items"]}>
        {cart.length > 0 ? (
          cart.map((product) => {
            const { id, name, price, image, qty } = product;
            return (
              <div className={styles["items"]} key={id}>
                <div className={styles["item"]}>
                  <div className={styles["image"]}>
                    <img src={image} alt={name} />
                  </div>
                  <h2>{name.substring(0, 30)}...</h2>
                  <div className={styles["desktop-controls"]}>
                    <span>₹ {price}</span>
                    <div className={styles["controls"]}>
                      <FiPlusSquare
                        onClick={() => {
                          dispatch({
                            type: "INCREMENT_ITEM_QTY",
                            payload: product,
                          });
                        }}
                      />
                      <span>{qty}</span>
                      <FiMinusSquare
                        onClick={() => {
                          dispatch({
                            type: "DECREMENT_ITEM_QTY",
                            payload: product,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={styles["mobile-controls"] + " " + styles["hide"]}
                  >
                    <span>₹ {price}</span>
                    <div className={styles["controls"]}>
                      <FiPlusSquare
                        onClick={() => {
                          dispatch({
                            type: "INCREMENT_ITEM_QTY",
                            payload: product,
                          });
                        }}
                      />
                      <span>{qty}</span>
                      <FiMinusSquare
                        onClick={() => {
                          dispatch({
                            type: "DECREMENT_ITEM_QTY",
                            payload: product,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles["delete"]}>
                    <RiDeleteBinLine
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles["empty-cart"]}>
            <div className={styles["empty-image"]}>
              <img src={emptyImage} alt="empty" />
            </div>
            <div className={styles["empty-header"]}>
              <p>Cart is empty!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItems;
