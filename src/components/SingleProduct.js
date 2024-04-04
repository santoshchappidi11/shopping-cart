import styles from "./SingleProduct.module.css";
import { ShoppingCart } from "../context/ShoppingcartContext";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const SingleProduct = () => {
  const {
    state: { products },
    filterState: { sortByPrice, inStock, delivery, searchQuery },
  } = ShoppingCart();

  const transformedProducts = () => {
    let newFilterProducts = products;

    if (sortByPrice) {
      newFilterProducts = newFilterProducts.sort((a, b) => {
        return sortByPrice === "lowToHigh"
          ? a.price - b.price
          : b.price - a.price;
      });
    }

    if (inStock) {
      newFilterProducts = newFilterProducts.filter((item) => item.inStock);
    }

    if (delivery) {
      newFilterProducts = newFilterProducts.filter((item) => item.delivery);
    }

    if (searchQuery) {
      newFilterProducts = newFilterProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    return newFilterProducts;
  };

  return (
    <>
      <FadeIn className={styles["all-products"]}>
        {transformedProducts().map((product) => {
          const {
            id,
            name,
            image,
            price,
            inStock,
            delivery,
            viewId,
            rating,
            numReviews,
          } = product;

          const newPrice = price && price.toLocaleString();

          return (
            <div className={styles["product"]} key={id}>
              <div className={styles["product-image"]}>
                <img src={image} alt={name} />
              </div>
              <div className={styles["product-info"]}>
                <h3>{name}</h3>
                <div className={styles["price-stars"]}>
                  <span className={styles["price"]}>₹ {newPrice}</span>
                  <Rating rating={rating} numReviews={numReviews} />
                </div>
                <div className={styles["product-details"]}>
                  {inStock ? (
                    <p className={styles["in-stock"]}>In stock</p>
                  ) : (
                    <p className={styles["no-stock"]}>Out of stock</p>
                  )}
                  {delivery ? <p>Fast delivery</p> : <p>4 days delivery</p>}
                </div>
                <div className={styles["btn"]}>
                  <Link to={`/View/${viewId}`} key={id}>
                    <button className={styles["view-btn"]}>View</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </FadeIn>
    </>
  );
};

export default SingleProduct;
