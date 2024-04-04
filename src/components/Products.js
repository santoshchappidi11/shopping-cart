import SingleProduct from "./SingleProduct";
import styles from "./Product.module.css";


const Products = () => {
  return (
    <>
      <div className={styles["products"]}>
        <SingleProduct />
      </div>
    </>
  );
};

export default Products;
