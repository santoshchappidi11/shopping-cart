import React from "react";
import { ShoppingCart } from "../context/ShoppingcartContext";
import styles from "./Filter.module.css";

const Filter = () => {
  const {
    filterState: { sortByPrice, inStock, delivery},
    filterDispatch,
  } = ShoppingCart();



  return (
    <>
      <div className={styles["filter"]}>
        <div className={styles["filter-header"]}>
          <h2>Filter Products</h2>
        </div>
        <div className={styles["filter-body"]}>
          <label>
            <input
              type="radio"
              name="sorting"
              onChange={() => {
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "highToLow",
                });
              }}
              checked={sortByPrice === "highToLow" ? true : false}
            />
            High price
          </label>

          <label>
            <input
              type="radio"
              name="sorting"
              onChange={() => {
                filterDispatch({
                  type: "FILTER_BY_PRICE",
                  payload: "lowToHigh",
                });
              }}
              checked={sortByPrice === "lowToHigh" ? true : false}
            />
            Low price
          </label>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked={inStock}
            />
            In stock only
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={delivery}
            />
            Fast Delivery
          </label>
        </div>
        <div className={styles["filter-footer"]}>
          <button
            onClick={() =>
              filterDispatch({
                type: "CLEAR_ALL_FILTERS",
              })
            }
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Filter);
