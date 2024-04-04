import { ShoppingCart } from "../context/ShoppingcartContext";
import styles from "./ProductDetails.module.css";
import Rating from "./Rating";

const ProductDetails = ({ item: product }) => {
  const {
    state: { cart },
    dispatch,
  } = ShoppingCart();

  const {
    // id,
    image,
    name,
    price,
    inStock,
    brand,
    color,
    connectivity,
    modelname,
    formfactor,
    description,
    rating,
    numReviews,
  } = product;

  // const [...cartId] = cart.map((c) => c.viewId);
  // const checkId = cartId.includes(id);
  // console.log(checkId, cartId, id);

  return (
    <>
      <div className={styles["product-detail"]}>
        <div className={styles["product-info"]}>
          <div className={styles["product-image"]}>
            <img src={image} alt={name} />
          </div>
          <div className={styles["product"]}>
            <h2>{name}</h2>
            <div className={styles["review"]}>
              <Rating rating={rating} numReviews={numReviews} />
            </div>
            <div className={styles["price"]}>
              <span>₹ {price}</span>
            </div>
            <div className={styles["status"]}>
              <p>
                Status:
                <span>
                  {inStock ? (
                    <span className={styles["available"]}> InStock</span>
                  ) : (
                    <span className={styles["unavailable"]}>Out of stock</span>
                  )}
                </span>
              </p>
            </div>
            <div className={styles["btn"]}>
              {cart.some((item) => item.id === product.id) ? (
                <button
                  className={styles["remove-btn"]}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    })
                  }
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  className={inStock ? styles["add-btn"] : styles["no-add-btn"]}
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    })
                  }
                >
                  Add to cart
                </button>
              )}
            </div>
            <div className={styles["details"]}>
              <div className={styles["detail"]}>
                <label>Brand</label>
                <span> {brand}</span>
              </div>
              <div className={styles["detail"]}>
                <label>Color</label>
                <span> {color}</span>
              </div>
              <div className={styles["detail"]}>
                <label>Connectivity Technology</label>
                <span> {connectivity}</span>
              </div>
              <div className={styles["detail"]}>
                <label>Model Name</label>
                <span> {modelname}</span>
              </div>
              <div className={styles["detail"]}>
                <label>Ear Placement</label>
                <span> {formfactor}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["product-desc"]}>
          <h4>Product description</h4>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
