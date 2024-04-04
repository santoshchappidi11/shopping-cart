import React from "react";
import MainPageLayout from "../navbar/MainPageLayout";
import FooterLayout from "../footer/FooterLayout";
import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <>
      <MainPageLayout>
        <FooterLayout>
          <div className={styles["cart"]}>
            <CartItems />

            <Checkout />
          </div>
        </FooterLayout>
      </MainPageLayout>
    </>
  );
};
export default Cart;
