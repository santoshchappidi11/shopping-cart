import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../context/ShoppingcartContext";

const Navbar = () => {
  const {
    state: { cart },
    totalAmount,
    filterState: { searchQuery },
    filterDispatch,
  } = ShoppingCart();

  const newTotalAmount = totalAmount && totalAmount.toLocaleString();

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <h2>
            <Link to="/">
              <span>h</span>EAD<span>p</span>HONES
            </Link>
          </h2>
        </div>
        <div className={styles["search"]}>
          <input
            type="text"
            placeholder="search your favourite..."
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            value={searchQuery}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <Link to="/Cart">
          <div className={styles["cart"]}>
            <span className={styles["items"]}>{cart.length}</span>
            <FaShoppingCart className={styles["icon"]} />
            <span className={styles["total"]}>₹ {newTotalAmount}</span>
          </div>
        </Link>
      </div>
      <div className={styles["search-responsive"]}>
        <div className={`${styles["search-mobile"]} ${styles["hide"]}`}>
          <input
            type="text"
            placeholder="search your favourite..."
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            value={searchQuery}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
