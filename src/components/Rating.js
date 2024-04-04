import { v4 as uuidv4 } from "uuid";
import styles from "./Rating.module.css";

const Rating = ({ rating, numReviews }) => {
  return (
    <>
      <div className={styles["rating"]}>
        {[1, 2, 3, 4, 5].map((rate) => (
          <i
            key={uuidv4()}
            style={{ color: "#17706e" }}
            className={
              rating + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : rating >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        ))}
        <span>({numReviews})</span>
      </div>
    </>
  );
};

export default Rating;
