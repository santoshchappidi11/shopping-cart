import ErrorPageImg from "../Images/404-page.png";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <div className={styles["error-image"]}>
        <img src={ErrorPageImg} alt="PAGE-NOT-FOUND" />
        <p>WE'RE SORRY THIS PAGE DOESN'T EXIST.</p>
      </div>
    </>
  );
};

export default ErrorPage;
