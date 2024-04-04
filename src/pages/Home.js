import React from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import FooterLayout from "../footer/FooterLayout";
import MainPageLayout from "../navbar/MainPageLayout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <MainPageLayout>
      <FooterLayout>
        <div className={styles["home"]}>
          <Filter />
          <Products />
        </div>
      </FooterLayout>
    </MainPageLayout>
  );
};
export default Home;
