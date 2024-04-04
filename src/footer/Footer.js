import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles["main-footer"]}>
        <div className={styles["logo"]}>
          <h2>
            <Link to="/">
              <span>h</span>EAD<span>p</span>HONES
            </Link>
          </h2>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["socials"]}>
            <ul>
              <li>
                <a href="/#">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["links"]}>
            <ul>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">Terms of use</a>
              </li>
              <li>
                <a href="/#">Privacy policy</a>
              </li>
              <li>
                <a href="/#">Carrers</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={styles["contact"]}>
            <ul>
              <li>
                <i className="fas fa-envelope "></i>
                <span> headphones@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span> 220-25487652</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["copyright"]}>
          <p>Copyright © 2021 headphones | Made By Santosh Chappidi</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
